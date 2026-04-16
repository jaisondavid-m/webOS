import React , { useCallback , useEffect , useRef } from "react"

function FlappyBird() {

    const frameRef = useRef(null)

    const focusGame = useCallback(() => {
        const frame = frameRef.current
        if (!frame) return

        frame.focus()
        frame.contentWindow?.focus()
    },[])

    const handleLoad = () => {
        focusGame()
    }

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.code !== "Space") return

            const frame = frameRef.current
            if (!frame) return
            if (document.activeElement === frame || frame.matches(":hover")) {
                e.preventDefault()
                focusGame()
            }
        }

        window.addEventListener("keydown", onKeyDown)

        return () => {
            window.removeEventListener("keydown", onKeyDown)
        }
    },[focusGame])

    return (
        <iframe
            ref={frameRef}
            src="https://flappybird.io/"
            className="w-full h-full border-0"
            allowFullScreen
            title="Flappy Bird"
            onLoad={handleLoad}
            onMouseEnter={focusGame}
            onClick={focusGame}
        />
    )
}

export default FlappyBird
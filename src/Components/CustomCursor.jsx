import React , { useEffect , useState } from "react"

function CustomCursor() {
    
    const [ position , setPosition ] = useState({ x: 0, y:0 })
    const [ clicked , setClicked ] = useState(false)
    const [ hidden , setHidden ] = useState(false)

    useEffect(() => {

        const moveCursor = (e) => {
            setPosition({ x: e.clientX , y: e.clientY })
            setHidden(false)
        }

        const handleDown = () => setClicked(true)
        const handleUp = () => setClicked(false)
        const leave = () => setHidden(true)
        const enter = () => setHidden(false)

        window.addEventListener("mousemove",moveCursor)
        window.addEventListener("mousedown",handleDown)
        window.addEventListener("mouseup",handleUp)
        document.addEventListener("mouseleave",leave)
        document.addEventListener("mouseenter",enter)

        return () => {
            window.removeEventListener("mousemove",moveCursor)
            window.removeEventListener("mousedown",handleDown)
            window.removeEventListener("mouseleave",leave)
            document.removeEventListener("mouseleave",leave)
            document.removeEventListener("mouseenter",enter)
        }

    },[])

    return (
        <>
        <style>{`body { cursor: none; }`}</style>
        <div
            className={`fixed top-0 left-0 z-[99999] pointer-events-none transition-all duration-150 ease-out
                ${hidden ? "opacity-0 scale-0" : "opacity-100"}
                ${clicked ? "scale-95" : "scale-100"}
                `}
                style={{
                    transform: `translate(${position.x - 20}px, ${position.y -20}px)`,
                }}
        >
            <div className="w-10 h-10 rounded-full border border-white/40 bg-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.3)]" />
        </div>
        <div
         className={`fixed top-0 left-0 z-[9999] pointer-events-none transition-all duration-75
            ${hidden ? "opacity-0 scale-0" : "opacity-100"}
            ${clicked ? "scale-150" : "scale-100"}
            `}
         style={{
            transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
         }}
        >
            <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]"/>
        </div>
        </>
    )

}

export default CustomCursor
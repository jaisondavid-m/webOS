import React, { useEffect, useState } from "react"

function ClassicCurosr() {

    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [clicked, setClicked] = useState(false)
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
            setHidden(false)
        }

        const handleDown = () => setClicked(true)
        const handleUp = () => setClicked(false)
        const leave = () => setHidden(true)
        const enter = () => setHidden(false)

        window.addEventListener("mousemove", moveCursor)
        window.addEventListener("mousedown",handleDown)
        window.addEventListener("mouseup",handleUp)
        document.addEventListener("mouseleave",leave)
        document.addEventListener("mouseenter",enter)

        return () => {
            window.removeEventListener("mousemove",moveCursor)
            window.removeEventListener("mousedown",handleDown)
            window.removeEventListener("mouseup",handleUp)
            document.removeEventListener("mouseleave",leave)
            document.removeEventListener("mouseenter",enter)
        }
    },[])

    return (
        <>
            <div className={`fixed top-0 left-0 z-[99999] pointer-events-none transition-all duration-75
                ${hidden ? "opacity-0" : "opacity-100"}
                ${clicked ? "scale-150" : "scale-100"}
                `}
                style={{
                    transform: `translate(${position.x - 2}px, ${position.y - 2}px)`
                }}
            >
                <div className="w-1.5 h-1.5 rounded-full bg-white"/>
            </div>
        </>
    )

}

export default ClassicCurosr
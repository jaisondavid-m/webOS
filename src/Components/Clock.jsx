import React , { useState , useEffect } from "react"

function Clock() {

    const [ time , setTime ] = useState(new Date)

    useEffect(() => {
        const t = setInterval(() => {
            setTime(new Date())
        }, 1000);
    })

    return (
        <div className="text-right">
            <div className="text-white text-sm font-semibold tracking-wide">
                {time.toLocaleTimeString([],{ hour: "2-digit" , minute: "2-digit" })}
            </div>
            <div className="text-white/50 text-xs">
                {time.toLocaleDateString([], { weekday: "short" , month: "short" , day: "numeric" })}
            </div>
        </div>
    )
}

export default Clock

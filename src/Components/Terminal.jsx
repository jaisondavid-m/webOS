import React from "react"

function Terminal() {
    return (
        <div className="font-mono text-xs text-green-400 p-3 h-full overflow-auto bg-gray-950">
            <div className="text-green-300 mb-1">
                Chikko OS Terminal v1.0
            </div>
            <div className="text-white/40 mb-3">--------------------------------------</div>
            {["$ ls -ls","drwxr-xr-x apps/","drwxr-xr-x home/","-rw-r--r-- config.json","$ whoami", "Chikko OS user","$ uptime","up 3 days,14:22","$ █"].map((line,l)=>(
                <div key={l} className="leading-5">{line}</div>
            ))}
        </div>
    )
}

export default Terminal
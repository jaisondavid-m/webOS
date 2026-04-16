import React from "react"

function Browser() {
    return (
        <div className="flex flex-col h-full bg-white">
            <div className="bg-gray-100 border-b border-gray-200 px-3 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                    {["bg-red-400","bg-yellow","bg-green-400"].map((c,i) => (
                        <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                    ))}
                </div>
                <div className="flex-1 bg-white border border-gray-200 rounded-full px-3 py-0.5 text-xs text-gray-500">
                    https://webos.local.home
                </div>  
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-3 text-gray-400">
                    <div className="text-5xl">◎</div>
                    <div className="text-sm font-medium text-gray-500">Chikko OS Browser</div>
                    <div className="text-xs">Double Click an app to launch it</div>
            </div>
        </div>
    )
}

export default Browser
import React from "react"

function Files() {
    const items = [
        { name: "Documents", icon: "📁", size: "—" },
        { name: "Downloads", icon: "📂", size: "—" },
        { name: "config.json", icon: "📄", size: "2.1 KB" },
        { name: "wallpaper.png", icon: "🖼", size: "4.2 MB" }
    ]
    return (
        <div className="h-full bg-white/80 backdrop-blur-md p-3 overflow-y-auto rounded-b-2xl">
            <div className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">
                This PC
            </div>
            {items.map((f) => (
                <div
                    key={f.name}
                    className="flex items-center justify-between py-1.5 px-2 rounded-xl hover:bg-gray-200 cursor-pointer text-sm transition"
                >
                    <span className="flex items-center gap-2">
                        <span className="">{f.icon}</span>
                        <span className="text-black">{f.name}</span>
                    </span>
                    <span className="text-gray-600 text-xs">{f.size}</span>
                </div>
            ))}
        </div>
    )

}

export default Files
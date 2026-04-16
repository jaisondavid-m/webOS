import React from "react"

function Files() {
    <div className="h-full bg-gray-50 p-3">
        <div className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
            Home Directory
        </div>
        {[
            { name: "Documents" , icon: "📁" , size: "—" },
            { name: "Downloads" , icon: "📂" , size: "—" },
            { name: "config.json" , icon: "📄" , size: "2.1 KB" },
            { name: "wallpaper.png" , icon: "🖼" , size: "4.2 MB" }
        ].map((f) => (
            <div
                key={f.name}
                className="flex items-center justify-between py-1.5 px-2 rounded-xl hover:bg-gray-200 cursor-pointer-default text-sm"
            >
                <span className="flex items-center gap-2">
                    <span className="">{f.icon}</span>
                    <span className="text-gray-800">{f.name}</span>
                </span>
                <span className="text-gray-400 text-xs">{f.size}</span>
            </div>
        ))}
    </div>
}

export default Files
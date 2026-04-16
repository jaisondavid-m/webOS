import React  from "react"

function AppIcon({ app , onClick }) {
    const Icon = app.icon
    return (
        <button
            onDoubleClick={onClick}
            className="flex flex-col items-center gap-1.5 group cursor-default select-none"
        >
            <Icon size={22} className="text-white drop-shadow" />
            {/* <div
                className={`w-14 h-14 ${app.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-105 group-active:scale-95 transition-transform duration-150`}
            >
                {app.icon}
            </div> */}
            <span className="text-white text-xs font-medium drop-shadow px-1.5 py-0.5 rounded-xl bg-black/30 backdrop-blur-sm">
                {app.label}
            </span>
        </button>
    )
}

export default AppIcon
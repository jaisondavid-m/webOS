import React, { useRef, useState } from "react"
import AppIcon from "../Components/AppIcon.jsx"
import { APP } from "../data/app.js"
import Window from "../Components/Window.jsx"
import Clock from "../Components/Clock.jsx"
import { Rocket } from "lucide-react"

function WebOSDesktop() {

    const [ windows , setWindows ] = useState([])
    const [ minimized , setMinimized ] = useState([])
    const [ menuOpen , setMenuOpen ] = useState(false)
    const zCounter = useRef(1)

    const openApp = (app) => {
        const existing = windows.find((w) => w.id === app.id)

        if (existing) {
            bringToFront(existing.uid)
            setMinimized((m) => m.filter((id) => id !== existing.uid))
            return
        }
        const uid = `${app.id}-${Date.now()}`
        const offset = windows.length * 24
        setWindows((ws)=> [
            ...ws,
            {
                ...app,
                uid,
                pos: { x: 80 + offset, y: 60 + offset },
                size: { w: 480 , h: 320 },
                z: ++zCounter.current,
            }
        ])
    }

    const closeWindow = (uid) => {
        setWindows((ws) => ws.filter((w) => w.uid !== uid))
        setMinimized((m) => m.filter((id) => id !== uid))
    }

    const minimizeWindow = (uid) => setMinimized((m) => m.includes(uid) ? m : [...m, uid])

    const bringToFront = (uid) => {
        setWindows((ws) =>
            ws.map((w) => (w.uid === uid ? {...w, z: ++zCounter.current} : w ))
        )
    }

    const restoreWindow = (uid) => {
        setMinimized((m) => m.filter((id) => id !== uid))
        bringToFront(uid)
    }

    return (
        <div className="relative w-full overflow-hidden select-none"
            style={{
                height: "100vh",
                minHeight: 520,
                background: "radial-gradient(ellipse at 30% 40%, #1e3a5f 0%, #0f172a 50%, #1a0b2e 100%)",
                fontFamily: "'Inter', sans-serif",
            }}
        >
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />
            <div className="absolute top-6 right-6 flex flex-col gap-5">
                {APP.map((app) => (
                    <AppIcon key={app.id} app={app} onClick={() => openApp(app)} />
                ))}
            </div>
            {windows.map((win) => 
                minimized.includes(win.uid) ? null : (
                    <Window 
                        key={win.uid}
                        win={win}
                        onClose={() => closeWindow(win.uid)}
                        onMinimize={() => minimizeWindow(win.uid)}
                        onFocus={() => bringToFront(win.uid)}
                    />
                )
            )}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gray-950/80 backdrop-blur-xl border-t border-white/10 flex items-center px-4 gap-3 ">
                <button
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-sm transition-colors"
                    title="Launcher"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <Rocket size={18} />
                </button>
                <div className="flex gap-2 flex-1 overflow-x-auto">
                    {windows.map((win) => {
                        const isMin = minimized.includes(win.uid)
                        return (
                            <button
                                key={win.uid}
                                onClick={() => (isMin ? restoreWindow(win.uid) : minimizeWindow(win.uid))}
                                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs transition-colors ${
                                    isMin 
                                        ? "bg-white/5 text-white/40 hover:bg-white/10"
                                        : "bg-white/15 text-white hover:bg-white/20"
                                }`}
                            >
                                <span>{APP.find((a) => a.id === win.id)?.icon}</span>
                                <span>{win.label}</span>
                            </button>
                        )
                    })}
                    {menuOpen && (
                        <div className="absolute bottom-14 left-3 w-44 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-xl p-2 text-white text-sm">
                            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/10">
                                About Chikko OS
                            </button>
                            <button
                                className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/10"
                                onClick={() => {
                                    const app = APP.find((a) => a.id === "settings")
                                    if (app) openApp(app)
                                    setMenuOpen(false)
                                }}
                            >
                                Settings
                            </button>
                            <button
                                onClick={() => setWindows([])}
                                className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/10"
                            >
                                Close All Windows
                            </button>
                        </div>
                    )}
                </div>
                <Clock/>
            </div>
            {windows.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                        <div className="text-white/20 text-5xl mb-4">⬡</div>
                        <div className="text-white/30 text-sm">Double Click an App Icon to Open It</div>
                    </div>
                </div>
            )}
        </div>
    )

}

export default WebOSDesktop
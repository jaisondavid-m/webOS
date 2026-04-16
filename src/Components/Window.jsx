import React , { useRef , useState , useCallback } from "react"
import { WindowContent } from "./WindowContent"

function Window({ win , onClose , onFocus , onMinimize }) {

    const dragRef = useRef(null)
    const [ pos , setPos ] = useState(win.pos)
    const [ size , setSize ] = useState(win.size)
    const [ maximized , setMaximized ] = useState(false)
    const [ prevState , setPrevState] = useState(null)

    const startDrag = useCallback((e) => {
        if (maximized) return
        onFocus()
        const startX = e.clientX - pos.x
        const startY = e.clientY - pos.y
        const onMove = (mv) => {
            setPos({ x: mv.clientX - startX , y: mv.clientY - startY })
        }
        const onUp = () => {
            window.removeEventListener("mousemove",onMove)
            window.removeEventListener("mouseup",onUp)
        }
        window.addEventListener("mousemove",onMove)
        window.addEventListener("mouseup",onUp)
    },[ pos , maximized , onFocus ])

    const startResize = useCallback((e) => {
        e.stopPropagation()
        const startX = e.clientX
        const startY = e.clientY
        const startW = size.w
        const startH = size.h
        const onMove = (mv) => 
            setSize({
                w: Math.max(280, startW + mv.clientX - startX),
                h: Math.max(200, startH + mv.clientY - startY)
            })
        const onUp = () => {
            window.removeEventListener("mousemove",onMove)
            window.removeEventListener("mouseup",onUp)
        }
        window.addEventListener("mousemove",onMove)
        window.addEventListener("mouseup",onUp)
    },[size])

    const toggleMaximize = () => {
        if (maximized) {
            setPos(prevState.pos)
            setSize(prevState.size)
            setMaximized(false)
        } else {
            setPrevState({ pos , size })
            setMaximized(true)
        }
    }

    const style = maximized
        ? { left: 0, top: 0 , width: "100%", height: "calc(100% - 48px)", zIndex: win.z }
        : { left: pos.x , top: pos.y , width: size.w , height: size.h , zIndex: win.z }

    return(
        <div 
            className="absolute flex flex-col rounded-xl overflow-hidden shadow-2xl border border-white/10"
            style={style}
            onMouseDown={onFocus}
        >
            <div
                className="flex items-center gap-3 px-3 py-2 bg-gray-900/95 backdrop-blur-md cursor-move select-none flex-shrink-0"
                onMouseDown={startDrag}
                onDoubleClick={toggleMaximize}
            >
                <div className="flex gap-1.5">
                    <button
                        onMouseDown={(e) => e.stopPropagation()}
                        onClick={onClose}
                        className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"
                    />
                    <button
                        onMouseDown={(e) => e.stopPropagation()}
                        onClick={onMinimize}
                        className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors"
                    />
                    <button
                        onMouseDown={(e) => e.stopPropagation()}
                        onClick={toggleMaximize}
                        className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors"
                    />
                </div>
                <span className="flex-1 text-center text-xs text-white/60 font-medium">{win.label}</span>
                <div className="w-10"/>
            </div>
            <div className="flex-1 overflow-hidden">{WindowContent[win.id]}</div>
            {!maximized && (
                <div
                 className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
                 onMouseDown={startResize}
                 style={{ background: "linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.15) 50%)" }}
                />
            )}
        </div>
    )
    
}

export default Window
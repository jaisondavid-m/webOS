import { FaTerminal } from "react-icons/fa"
import { FaGlobe } from "react-icons/fa"
import { FaFolder } from "react-icons/fa"
import { IoSettingsSharp } from "react-icons/io5"
import { FaRegStickyNote } from "react-icons/fa"
import { GiBirdTwitter } from "react-icons/gi"
import { FaCalculator } from "react-icons/fa"

export const APP = [
    { id: "terminal"  , label: "Terminal" , icon: FaTerminal , color: "bg-emerald-500" },
    { id: "browser" , label: "Browser" , icon: FaGlobe , color: "bg-sky-500" },
    { id: "files" , label: "Files" , icon: FaFolder , color: "bg-amber-500" },
    { id: "settings" , label: "Setting" , icon: IoSettingsSharp , color: "bg-violet-500" },
    { id: "notes" , label: "Notes" , icon: FaRegStickyNote , color: "bg-rose-500" },
    { id: "flappy" , label: "Flappy Bird" , icon: GiBirdTwitter , color: "bg-white" },
    { id: "calculator" , label: "Calculator" , icon: FaCalculator , color: "bg-blue-500"  }
]
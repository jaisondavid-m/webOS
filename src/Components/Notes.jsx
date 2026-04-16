import React, { useEffect, useState } from "react"

function Notes() {

    const defaultNote = "Chikko OS Notes\n──────────\n• Meeting at 3pm\n• Buy Groceries\n• Vote FlavourTown Projects"

    const [ text , setText ] = useState("")

    useEffect(() => {
        const saved = localStorage.getItem("chikko-notes")
        setText(saved || defaultNote)
    },[])

    const handleChange = (e) => {
        const value = e.target.value
        setText(value)
        localStorage.setItem("chikko-notes",value)
    }

    return (
        <div className="h-full bg-amber-50 p-4">
            <textarea
                className="w-full h-full resize-none bg-transparent text-sm text-gray-700 outline-none font-mono leading-relaxed placeholder:text-amber-300"
                placeholder="Start Typing Your Note..."
                onChange={handleChange}
                value={text}
            />
        </div>
    )
}

export default Notes
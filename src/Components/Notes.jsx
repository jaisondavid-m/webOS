import React from "react"

function Notes() {
    return (
        <div className="h-full bg-amber-50 p-4">
            <textarea
                className="w-full h-full resize-none bg-transparent text-sm text-gray-700 outline-none font-mono leading-relaxed placeholder:text-amber-300"
                placeholder="Start Typing Your Note..."
                defaultValue={"Chikko OS Notes\n──────────\n• Meeting at 3pm\n• Buy Groceries\n• Vote FlavourTown Projects"}
            />
        </div>
    )
}

export default Notes
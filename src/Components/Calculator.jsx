import React , { useState } from "react"

function Calculator() {

    const [ input , setInput ] = useState("0")

    const handleClick = (value) => {
        if ( input === "0" && value !== "." ) {
            setInput(value)
        } else {
            setInput(input + value)
        }
    }

    const clearAll = () => {
        setInput("0")
    }

    const deleteLast = () => {
        if (input.length === 1) {
            setInput("0")
        } else {
            setInput(input.slice(0,-1))
        }
    }

    const calculate = () => {
        try {
            const result = eval(input)
            setInput(String(result))
        } catch {
            setInput("")
        }
    }

    const buttons = [
        "C" , "⌫" , "%" , "/" ,
        "7" , "8" , "9" , "*" ,
        "4" , "5" , "6" , "-" ,
        "1" , "2" , "3" , "+" ,
        "0" , "." , "="
    ]

    const handleButton = (btn) => {
        if (btn === "C") return clearAll()
        if (btn === "⌫") return deleteLast()
        if (btn === "=") return calculate()
        handleClick(btn)
    }

    return (
        <div className="h-full bg-zinc-900 text-white flex flex-col p-3">
            <div className="bg-zinc-800 rounded-xl p-4 text-right text-3xl font-mono mb-3 overflow-x-auto">
                {input}
            </div>
            <div className="grid grid-cols-4 gap-2 flex-1">
                {buttons.map((btn,i) => (
                    <button
                        key={i}
                        onClick={() => handleButton(btn)}
                        className={`rounded-xl text-lg font-semibold transition active:scale-96=5
                            ${
                                btn === "="
                                ? "col-span-2 bg-blue-500 hover:bg-blue-600"
                                : ["+","-","*","/","%"].includes(btn)
                                ? "bg-orange-500 hover:bg-orange-600"
                                : ["C","⌫"].includes(btn)
                                ? "bg-red-500 hover:bg-red-600"
                                : "bg-zinc-700 hover:bg-zinc-600"
                            }
                            `}
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Calculator
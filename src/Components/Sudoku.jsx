import React , {  useState } from "react"

const puzzle = [
    [5,3,"","",7,"","","",""],
    [6,"","",1,9,5,"","",""],
    ["",9,8,"","","","",6,""],
    [8,"","","",6,"","","",3],
    [4,"","",8,"",3,"","",1],
    [7,"","","",2,"","","",6],
    ["",6,"","","","",2,8,""],
    ["","","",4,1,9,"","",5],
    ["","","","",8,"","",7,9]
]

function Sudoku() {

    const [ grid , setGrid ] = useState(puzzle)

    const updateCell = ( r , c , val ) => {
        if (puzzle[r][c] !== "") return
        const copy = grid.map(row => [...row])
        copy[r][c] = val === "" ? "" : Number(val)
        setGrid(copy)
    }

    return (
        <div className="w-full h-full bg-gray-900 flex items-center justify-center p-4">
            <div 
                className="bg-white p-1 rounded-lg"
                style={{
                    display:"grid",
                    gridTemplateColumns: "repeat(9,40px)",
                    gap: "1px"
                }}
            >
                {grid.map((row,r) => 
                    row.map((cell,c) => (
                        <input
                            key={`${r}-${c}`}
                            value={cell}
                            maxLength={1}
                            onChange={(e) => updateCell(r,c,e.target.value.replace(/[^1-9]/g,""))}
                            className="text-center text-black outline-none border border-gray-400 text-lg font-semibold"
                            style={{
                                width: "40px" ,
                                height: "40px" ,
                                borderRight: c===2 || c===5 ? "2px solid black" : "" ,
                                borderBottom: r===2 || r===5 ? "2px solid black" : "" ,
                            }}
                            readOnly={puzzle[r][c] !== ""}
                        />
                    ))
                )}
            </div>
        </div>
    )
}
export default Sudoku


// function CarGame() {

//     const frameRef = useRef(null)

//     const focusGame = useCallback(() => {
//         const frame = frameRef.current
//         if (!frame) return
//         frame.focus()
//         frame.contentWindow?.focus()
//     },[])

//     const handleLoad = () => {
//         focusGame()
//     }

//     useEffect(() => {
//         const onKeyDown = (e) => {

//             const keys = [ "ArrowUp" , "ArrowDown" , "ArrowLeft" , "ArrowRight" , "Space" ]

//             if(!keys.includes(e.code)) return

//             const frame = frameRef.current
//             if(!frame) return

//             if (document.activeElement === frame || frame.matches(":hover")) {
//                 e.preventDefault()
//                 focusGame()
//             }
//         }

//         window.addEventListener("keydown",onKeyDown)

//         return () => {
//             window.removeEventListener("keydown",onKeyDown)
//         }
//     },[focusGame])

//     return (
//         <iframe
//             ref={frameRef}
//             src="https://www.websudoku.com/"
//             className="w-full h-full border-0"
//             sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
//             allowFullScreen
//             title="Car Game"
//             onLoad={handleLoad}
//             onMouseEnter={focusGame}
//             onClick={focusGame}
//         />
//     )

// }

// export default CarGame
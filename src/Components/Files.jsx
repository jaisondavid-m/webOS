import React, { useEffect, useState } from "react"

function Files() {
    const defaultData = [
        {
            id:1,
            name:"Documents",
            type:"folder",
            children: [
                { id: 2, name: "Resume.pdf" , type: "file" , size: "120 KB" },
                { id: 3, name: "Notes.txt" , type: "file" , size: "2 KB" },
            ]
        },
        {
            id:4,
            name: "Downloads",
            type:"folder",
            children:[]
        },
        {
            id: 5,
            name: "config.json",
            type: "file",
            size: "2.1 KB"
        }
    ]

    const [ items , setItems ] = useState([])
    const [ folderName , setFolderName ] = useState("")
    const [ fileName , setFileName ] = useState("")
    const [ selectedFolderId , setSelectedFolderId ] = useState(null)

    useEffect(() => {
        const saved = localStorage.getItem("pc-files")
        setItems(saved ? JSON.parse(saved) : defaultData)
    },[])

    useEffect(() => {
        localStorage.setItem("pc-files",JSON.stringify(items))
    },[items])

    const createFolder = () => {

        if (!folderName.trim()) return

        const NewFolder = {
            id: Date.now(),
            name: folderName,
            type: "folder",
            children: []
        }

        const addToFolder = (list) => {
            return list.map((item) => {
                if (item.id === selectedFolderId && item.type === "folder") {
                    return {
                        ...item , children: [...item.children,NewFolder]
                    }
                }
                if(item.children) {
                    return {
                        ...item,
                        children: addToFolder(item.children)
                    }
                }
                return item
            })
        }

        if (selectedFolderId) {
            setItems(addToFolder(items))
        } else {
            setItems([...items,NewFolder])
        }

        // setItems([...items,NewFolder])
        setFolderName("")

    }

    const createFile = () => {

        if (!fileName.trim()) return

        const newFile = {
            id: Date.now(),
            name: fileName,
            type: "file",
            size: "1 KB",
        }

        setItems([...items,newFile])
        setFileName("")

    }

    const renderItems = (list,level=0) => {
        return list.map((item) => (
            <div key={item.id}>
                <div
                    onClick={() => item.type === "folder" ? setSelectedFolderId(item.id) : null}
                    className="flex justify-between py-1.5 px-2 rounded-xl hover:bg-gray-200 text-sm cursor-pointer"
                    style={{ marginLeft: `${level*20}px` }}
                >
                    <span className="flex gap-2">
                        <span>{item.type === "folder" ? "📁" : "📄"}</span>
                        <span>{item.name}</span>
                    </span>
                    <span>
                        {item.type === "file" ? item.size : "-"}
                    </span>
                </div>
                {item.type === "folder" && 
                    item.children &&
                    renderItems(item.children,level+1)
                }
            </div>
        ))
    }

    // const items = [
    //     { name: "Documents", icon: "📁", size: "—" },
    //     { name: "Downloads", icon: "📂", size: "—" },
    //     { name: "config.json", icon: "📄", size: "2.1 KB" },
    //     { name: "wallpaper.png", icon: "🖼", size: "4.2 MB" }
    // ]
    return (
        <div className="h-full bg-white/80 backdrop-blur-md p-3 overflow-y-auto rounded-b-2xl">
            <div className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">
                This PC
            </div>
            <div className="flex gap-2 mb-3">
                <input
                    value={folderName}
                    onChange={(e) => setFolderName(e.target.value)}
                    placeholder="Folder Name"
                    className="border px-2 py-1 rounded-xl text-sm w-full"
                />
                <button
                    onClick={createFolder}
                    className="px-3 py-1 bg-blue-500 text-white rounded-xl text-sm"
                >
                    + Folder
                </button>
            </div>
            <div className="flex gap-2 mb-4" >
                <input
                    value={fileName}
                    onChange={(e) => setFileName(e.target.value)}
                    placeholder="File Name"
                    className="border px-2 py-1 rounded-xl text-sm w-full"
                />
                <button
                    onClick={createFile}
                    className="px-3 py-1 bg-green-500 text-white rounded-xl text-sm"
                >
                    + File
                </button>
            </div>
            {renderItems(items)}
            {/* {items.map((f) => (
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
            ))} */}
        </div>
    )

}

export default Files
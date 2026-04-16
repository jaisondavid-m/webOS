import React, { useState , useRef } from "react"

function Browser() {

    const [url, setUrl] = useState("https://example.com")
    const [input, setInput] = useState("https://example.com")
    const [ loading , setLoading ] = useState(false)
    const [ isOpen , setIsOpen ] = useState(true)
    const iframeRef = useRef(null)

    const goToSite = () => {

        let value = input.trim()

        if (!value) return

        const isUrl = 
            value.includes(".") ||
            value.startsWith("http://") ||
            value.startsWith("www.")

        let finalUrl = ""

        if (isUrl) {
            if (!value.startsWith("http")) {
                finalUrl = "https://" + value
            } else {
                finalUrl = value
            }
        } else {
            finalUrl = `https://www.bing.com/search?q=${encodeURIComponent(value)}`
        }

        // if (!finalUrl.startsWith("http")) {
        //     finalUrl = "https://" + finalUrl
        // }
        setLoading(true)
        setUrl(finalUrl)
        setInput(finalUrl)
    }

    const refreshPage = () => {
        if (iframeRef.current) {
            iframeRef.current.src = iframeRef.current.src
            setLoading(true)
        }
    }

    const newTab = () => {
        setUrl("")
        setInput("")
        setLoading(false)
    }

    if (!isOpen) {
        return (
            <div className="h-full flex items-center justify-center bg-gray-100">
                <button
                    onClick={() => setIsOpen(true)}
                    className="px-4 py-2 bg-black text-white rounded-full text-sm"
                >
                    Open Browser
                </button>
            </div>
        )
    }

    return (
        <div className="flex flex-col h-full bg-white">
            <div className="bg-gray-100 border-b px-3 py-2 flex items-center gap-2">
                {/* <div className="flex gap-1.5">
                    {["bg-red-400", "bg-yellow-400", "bg-green-400"].map((c, i) => (
                        <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                    ))}
                </div> */}
                <button
                    onClick={refreshPage}
                    className="px-2 py-1 text-xs bg-white border rounded-xl"
                >
                    ⟳
                </button>
                <button
                    onClick={newTab}
                    className="px-2 py-1 text-xs bg-white border rounded-xl"
                >
                    +
                </button>
                <button
                    onClick={() => setIsOpen(false)}
                    className="px-2 py-1 text-xs bg-white border rounded-xl"
                >
                    X
                </button>
            </div>
            <div className="w-full flex justify-center gap-2 p-5">
                <input
                    value={input}
                    placeholder="Search sites"
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && goToSite()}
                    className=" bg-white border rounded-full px-3 py-1 text-xs outline-none"
                />
                <button
                    onClick={goToSite}
                    className="px-3 py-1 text-xs bg-black text-white rounded-full"
                >
                    Go
                </button>
            </div>

            {loading && (
                <div className="px-4 py-2 text-xs text-gray-500 animate-pulse">
                    Loading ...
                </div>
            )}

            <iframe
                ref={iframeRef}
                src={url}
                title="browser"
                onLoad={() => setLoading(false)}
                className="flex-1 w-full"
            />
            {/* <div className="bg-gray-100 border-b border-gray-200 px-3 py-2 flex items-center gap-2">
                
                <div className="flex-1 bg-white border border-gray-200 rounded-full px-3 py-0.5 text-xs text-gray-500">
                    https://webos.local.home
                </div>  
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-3 text-gray-400">
                    <div className="text-5xl">◎</div>
                    <div className="text-sm font-medium text-gray-500">Chikko OS Browser</div>
                    <div className="text-xs">Double Click an app to launch it</div>
            </div> */}
        </div>
    )
}

export default Browser
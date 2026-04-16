import React from "react"

function Setting() {
    return (
        <div className="h-full bg-gray-50 p-4 space-y-4">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                System
            </div>
            {[
                { label: "Display" , details: "1920 x 1080  ·  60Hz" },
                { label: "Network" , details: "Connected  ·  Chikko OS LAN" },
                { label: "Sound" , details: "50%  ·  Built-in Speakers" },
                { label: "Storage" , details: "42 GB used of 128 GB" },
            ].map((s) => (
                <div key={s.label} className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-sm font-medium text-gray-700">{s.label}</span>
                    <span className="text-xs text-gray-400">{s.details}</span>
                </div>
            ))}
        </div>
    )
}

export default Setting
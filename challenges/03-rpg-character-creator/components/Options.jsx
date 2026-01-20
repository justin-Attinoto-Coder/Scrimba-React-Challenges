import React from "react"

export default function Options({ characterData }) {
    const { attackOptions } = characterData
    
    return (
        <div className="attack-options">
            <h3 className="options-title">Attack Options</h3>
            <div className="options-grid">
                {attackOptions.map((option, index) => (
                    <div key={index} className="attack-option">
                        <span className="option-number">{index + 1}</span>
                        <span className="option-name">{option}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

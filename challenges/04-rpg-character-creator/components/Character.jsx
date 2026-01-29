import React from "react"

export default function Character({ characterData }) {
    const { hat, shield, weapon, name } = characterData
    
    return (
        <div className="character-display">
            <div className="character-avatar">
                {hat && <div className="hat">🎩</div>}
                <div className="character-face">🧙</div>
                {shield && <div className="shield">🛡️</div>}
                <div className="weapon">
                    {weapon === "sword" ? "⚔️" : "🪄"}
                </div>
            </div>
            <h2 className="character-name">{name}</h2>
        </div>
    )
}

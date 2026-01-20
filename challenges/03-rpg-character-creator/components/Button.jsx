import React from "react"
import namesList from "../data/namesList"
import attackOptionsList from "../data/attackOptionsList"

export default function Button({ setCharacterData }) {
    
    function randomizeCharacter() {
        const randomName = namesList[Math.floor(Math.random() * namesList.length)]
        const shuffled = [...attackOptionsList].sort(() => Math.random() - 0.5)
        const randomAttacks = shuffled.slice(0, 6)
        
        setCharacterData({
            hat: Math.random() > 0.5,
            shield: Math.random() > 0.5,
            weapon: Math.random() > 0.5 ? "sword" : "staff",
            name: randomName,
            attackOptions: randomAttacks,
            stats: {
                hp: Math.floor(Math.random() * 101),
                mp: Math.floor(Math.random() * 101),
                strength: Math.floor(Math.random() * 101)
            }
        })
    }
    
    return (
        <button className="randomize-btn" onClick={randomizeCharacter}>
            🎲 Randomize Character
        </button>
    )
}

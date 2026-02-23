const namesList = [
    "Aldric",
    "Brynn",
    "Celestia",
    "Drakon",
    "Elara",
    "Finnian",
    "Gwendolyn",
    "Hadrian",
    "Isolde",
    "Jareth"
]

const attackOptionsList = [
    "Fire Blast",
    "Ice Shard",
    "Thunder Strike",
    "Poison Cloud",
    "Healing Light",
    "Shadow Strike",
    "Wind Slash",
    "Earth Quake",
    "Holy Smite",
    "Dark Curse",
    "Lightning Bolt",
    "Water Wave"
]

function Button({ setCharacterData }) {
    
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
    
    return React.createElement("button", { className: "randomize-btn", onClick: randomizeCharacter },
        "🎲 Randomize Character"
    )
}

export default Button

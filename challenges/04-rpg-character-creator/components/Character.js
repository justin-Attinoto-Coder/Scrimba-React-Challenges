function Character({ characterData }) {
    const { hat, shield, weapon, name } = characterData
    
    return React.createElement("div", { className: "character-display" },
        React.createElement("div", { className: "character-avatar" },
            hat && React.createElement("div", { className: "hat" }, "🎩"),
            React.createElement("div", { className: "character-face" }, "🧙"),
            shield && React.createElement("div", { className: "shield" }, "🛡️"),
            React.createElement("div", { className: "weapon" },
                weapon === "sword" ? "⚔️" : "🪄"
            )
        ),
        React.createElement("h2", { className: "character-name" }, name)
    )
}

export default Character

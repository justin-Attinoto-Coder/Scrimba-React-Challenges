function Options({ characterData }) {
    const { attackOptions } = characterData
    
    return React.createElement("div", { className: "attack-options" },
        React.createElement("h3", { className: "options-title" }, "Attack Options"),
        React.createElement("div", { className: "options-grid" },
            attackOptions.map((option, index) => 
                React.createElement("div", { key: index, className: "attack-option" },
                    React.createElement("span", { className: "option-number" }, index + 1),
                    React.createElement("span", { className: "option-name" }, option)
                )
            )
        )
    )
}

export default Options

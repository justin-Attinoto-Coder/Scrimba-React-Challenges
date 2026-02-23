function StatusBars({ characterData }) {
    const { stats } = characterData
    
    return React.createElement("div", { className: "status-bars" },
        React.createElement("div", { className: "stat-bar" },
            React.createElement("div", { className: "stat-label" },
                React.createElement("span", { className: "stat-icon" }, "❤️"),
                React.createElement("span", null, "HP")
            ),
            React.createElement("div", { className: "bar-container" },
                React.createElement("div", { className: "bar-fill hp", style: { width: `${stats.hp}%` } },
                    stats.hp
                )
            )
        ),
        
        React.createElement("div", { className: "stat-bar" },
            React.createElement("div", { className: "stat-label" },
                React.createElement("span", { className: "stat-icon" }, "✨"),
                React.createElement("span", null, "MP")
            ),
            React.createElement("div", { className: "bar-container" },
                React.createElement("div", { className: "bar-fill mp", style: { width: `${stats.mp}%` } },
                    stats.mp
                )
            )
        ),
        
        React.createElement("div", { className: "stat-bar" },
            React.createElement("div", { className: "stat-label" },
                React.createElement("span", { className: "stat-icon" }, "💪"),
                React.createElement("span", null, "STR")
            ),
            React.createElement("div", { className: "bar-container" },
                React.createElement("div", { className: "bar-fill strength", style: { width: `${stats.strength}%` } },
                    stats.strength
                )
            )
        )
    )
}

export default StatusBars

import React from "react"

export default function StatusBars({ characterData }) {
    const { stats } = characterData
    
    return (
        <div className="status-bars">
            <div className="stat-bar">
                <div className="stat-label">
                    <span className="stat-icon">❤️</span>
                    <span>HP</span>
                </div>
                <div className="bar-container">
                    <div className="bar-fill hp" style={{ width: `${stats.hp}%` }}>
                        {stats.hp}
                    </div>
                </div>
            </div>
            
            <div className="stat-bar">
                <div className="stat-label">
                    <span className="stat-icon">✨</span>
                    <span>MP</span>
                </div>
                <div className="bar-container">
                    <div className="bar-fill mp" style={{ width: `${stats.mp}%` }}>
                        {stats.mp}
                    </div>
                </div>
            </div>
            
            <div className="stat-bar">
                <div className="stat-label">
                    <span className="stat-icon">💪</span>
                    <span>STR</span>
                </div>
                <div className="bar-container">
                    <div className="bar-fill strength" style={{ width: `${stats.strength}%` }}>
                        {stats.strength}
                    </div>
                </div>
            </div>
        </div>
    )
}

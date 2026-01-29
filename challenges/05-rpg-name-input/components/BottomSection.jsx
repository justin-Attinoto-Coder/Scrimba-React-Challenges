import React from "react"

export default function BottomSection({ submitted, playerName }) {
    return (
        <div className="bottom-section">
            {submitted ? (
                <p>Your hero name is: {playerName}</p>
            ) : (
                <button type="submit">Continue</button>
            )}
        </div>
    )
}
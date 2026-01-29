import React from "react"

export default function TopSection({ submitted }) {
    return (
        <div className="top-section">
            {submitted ? (
                <h1>Welcome, Hero!</h1>
            ) : (
                <h1>Choose Your Name</h1>
            )}
        </div>
    )
}
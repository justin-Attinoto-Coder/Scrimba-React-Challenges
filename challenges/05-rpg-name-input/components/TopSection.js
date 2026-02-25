function TopSection({ submitted }) {
    return React.createElement("div", { className: "top-section" },
        submitted ? 
            React.createElement("h1", null, "Welcome, Hero!") :
            React.createElement("h1", null, "Choose Your Name")
    )
}

export default TopSection
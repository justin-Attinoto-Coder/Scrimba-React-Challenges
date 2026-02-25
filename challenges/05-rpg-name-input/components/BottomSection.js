function BottomSection({ submitted, playerName }) {
    return React.createElement("div", { className: "bottom-section" },
        submitted ? 
            React.createElement("p", null, "Your hero name is: ", playerName) :
            React.createElement("button", { type: "submit" }, "Continue")
    )
}

export default BottomSection
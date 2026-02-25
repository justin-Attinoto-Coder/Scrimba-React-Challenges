function StartButton({clickHandler}) {
    return React.createElement("button", {
        className: "start-button",
        type: "button",
        onClick: clickHandler
    }, React.createElement("span", null, "Start"))
}

export default StartButton
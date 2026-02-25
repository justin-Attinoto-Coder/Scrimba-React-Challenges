function GetNewProblemButton({clickHandler, disabled}) {
    return React.createElement("button", {
        type: "button",
        className: "new-problem-button",
        onClick: clickHandler,
        disabled: disabled
    }, React.createElement("span", null, "New Problem"))
}

export default GetNewProblemButton
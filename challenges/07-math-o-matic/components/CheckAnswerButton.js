function CheckAnswerButton({disabled}) {
    return React.createElement("button", {
        className: "check-answer-button",
        type: "submit",
        disabled: disabled
    }, React.createElement("span", null, "Check Answer"))
}

export default CheckAnswerButton
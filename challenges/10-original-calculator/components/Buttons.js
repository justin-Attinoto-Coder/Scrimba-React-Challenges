function Buttons({ handleClick, buttonData }) {

  function getName(item) {
    const options = [
      [0, "zero"],
      [1, "one"],
      [2, "two"],
      [3, "three"],
      [4, "four"],
      [5, "five"],
      [6, "six"],
      [7, "seven"],
      [8, "eight"],
      [9, "nine"],
      ["+", "plus"],
      ["−", "minus"],
      ["x", "times"],
      ["÷", "divide"],
      ["=", "equals"],
      ["clear", "clear"],
      [".", "decimal"],
      ["+/-", "negative"],
      ["%", "percent"],
    ]
    return options.find( pair => pair[0] === item )[1]
  }

    const numberButtons = Array(10)
    .fill("")
    .map((item, index) => {
      return React.createElement("button", {
          key: index,
          "data-number": `${index}`,
          className: `number-button ${getName(index)}`,
          onClick: handleClick
        }, index)
    })

    function checkIfHighlighted(item) {
        return item === buttonData.operation ? "highlight" : ""
    }

  const operationsButtons = ["+", "−", "x", "÷"].map((item) => 
    React.createElement("button", {
      key: item,
      "data-operation": item,
      className: `operation-button ${getName(item)} ${checkIfHighlighted(item)}`,
      onClick: handleClick
    }, item)
  )

  const otherButtons = ["clear", "=", ".", "%", "+/-"].map((item) => 
    React.createElement("button", {
      key: item,
      "data-other": getName(item),
      className: `${getName(item)} button`,
      onClick: handleClick
    }, item === "clear" ? buttonData.clearOption : item)
  )

  return React.createElement("div", { className: "buttons-container" },
    ...numberButtons,
    ...operationsButtons,
    ...otherButtons
  )
}

export default Buttons
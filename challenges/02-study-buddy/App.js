import React from "react"
import { nanoid } from "nanoid"
import reactLogo from "./images/react.svg"

export default function App() {
  const [flashCard, setFlashCard] = React.useState({
    question: "What is React?",
    choices: ["A JavaScript framework", "A JavaScript library"],
    answer: "A JavaScript library.",
    explanation: `It's absolutely crucial that if you ever hear anyone have the
          audacity to call it a framework, you must correct them as
          pedantically as possible, preferably starting your response with
          the phrase "um, actually..."`,
  })

  const [isFlipped, setIsFlipped] = React.useState(false)

  function handleFlip() {
    setIsFlipped(prev => !prev)
  }

  return React.createElement("div", { className: "page" },
    React.createElement("header", { className: "hero" },
      React.createElement("div", { className: "logo-circle" },
        React.createElement("img", { src: reactLogo, alt: "React logo" })
      ),
      React.createElement("div", null,
        React.createElement("p", { className: "eyebrow" }, "Challenge 02"),
        React.createElement("h1", null, "React Study Buddy"),
        React.createElement("p", { className: "lede" }, "Tap the card to flip between the question and the answer.")
      )
    ),
    React.createElement("div", { className: "card-stage" },
      React.createElement("div", {
        className: `flash-card ${isFlipped ? "flipped" : ""}`,
        onClick: handleFlip
      },
        React.createElement("div", { className: "flash-card-inner" },
          React.createElement("div", { className: "flash-card-front" },
            React.createElement("div", { className: "sticker sticker-front" }, "🤓"),
            React.createElement("p", { className: "question" }, flashCard.question),
            React.createElement("ol", { type: "a", className: "choices" },
              flashCard.choices.map(choice => 
                React.createElement("li", { key: nanoid() }, choice)
              )
            )
          ),
          React.createElement("div", { className: "flash-card-back" },
            React.createElement("div", { className: "sticker sticker-back" }, "💡"),
            React.createElement("p", { className: "answer" }, flashCard.answer),
            React.createElement("p", { className: "explanation" }, flashCard.explanation)
          )
        )
      )
    )
  )
}

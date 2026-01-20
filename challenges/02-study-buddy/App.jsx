import React from "react"
import { nanoid } from "nanoid"

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

  return (
    <div className="page">
      <header className="hero">
        <div className="logo-circle">
          <img src="./images/react.svg" alt="React logo" />
        </div>
        <div>
          <p className="eyebrow">Challenge 02</p>
          <h1>React Study Buddy</h1>
          <p className="lede">Tap the card to flip between the question and the answer.</p>
        </div>
      </header>

      <div className="card-stage">
        <div
          className={`flash-card ${isFlipped ? "flipped" : ""}`}
          onClick={handleFlip}
        >
          <div className="flash-card-inner">
            <div className="flash-card-front">
              <div className="sticker sticker-front">🤓</div>
              <p className="question">{flashCard.question}</p>
              <ol type="a" className="choices">
                {flashCard.choices.map(choice => (
                  <li key={nanoid()}>{choice}</li>
                ))}
              </ol>
            </div>
            <div className="flash-card-back">
              <div className="sticker sticker-back">💡</div>
              <p className="answer">{flashCard.answer}</p>
              <p className="explanation">{flashCard.explanation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

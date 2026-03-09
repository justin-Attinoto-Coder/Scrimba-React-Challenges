import React from 'react'
import TopSection from "./components/TopSection.js"
import BottomSection from "./components/BottomSection.js"

function App() {
	const [playerName, setPlayerName] = React.useState("")
	const [submitted, setSubmitted] = React.useState(false)
    
    function handleSubmit(e) {
		e.preventDefault()
		setSubmitted(true)
		setPlayerName(prevName => prevName.trim() + " The Magnificent!")
	}
	
	function handleChange(event) {
		setPlayerName(event.target.value)
	}
	
	console.log(playerName)

	return React.createElement("form", { className: "form", onSubmit: handleSubmit },
        React.createElement(TopSection, { submitted: submitted }),
        
		React.createElement("input", {
			className: "name-input",
			type: "text",
			maxLength: 16,
			placeholder: "Enter Your Character's Name",
			required: true,
			disabled: submitted,
			onChange: handleChange,
			value: playerName
		}),
        
        React.createElement(BottomSection, { submitted: submitted, playerName: playerName })
	)
}

export default App
function App() {

	function handleChange(event) {
		const { name, type, value, checked } = event.target

		function hijackResults() {
			let string = ""

			if (name === "firstName") {
				string = "Stinky"
			} else if (name === "lastName") {
				string = "McStinkerson"
			} else {
				string = "StinkyMcStinkerson@gmail.com"
			}

			return string.slice(0, value.length)
		}

		function switcharoo(event) {
			if (value === "no" && formData.privacyResponse === "yes") {
				return "absolutely"
			} else if (value === "no" && formData.privacyResponse === "absolutely") {
				return "yes"
			} else {
				return value
			}
		}

		let dataToRecord

		if (name === "firstName" || name === "lastName" || name === "email") {
			dataToRecord = hijackResults()
		} else if (type == "radio") {
			dataToRecord = switcharoo(event)
		} else {
			dataToRecord = type === "checkbox" ? checked : value
		}
		
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[name]: dataToRecord
			}
		})
	}

	function fakeSubmit(e) {
		e.preventDefault()
		setFormData(prev => ({...formData, wantsToSubmit: !prev.wantsToSubmit}))
	}
	
	React.useEffect(() => {
		if (formData.rating !== "10") {
			setTimeout(() => {
				setFormData({ ...formData, rating: "10" })
			}, 2000)
		}

		if (!formData.marketingResponse) {
			setTimeout(() => {
				setFormData({ ...formData, rating: "10", marketingResponse: true })
			}, 2000)
		}
	}) 

	const [formData, setFormData] = React.useState({
		firstName: "",
		lastName: "",
		email: "",
		privacyResponse: "yes",
		rating: "10",
		marketingResponse: true,
		wantsToSubmit: false
	})

	return React.createElement("form", { onSubmit: fakeSubmit },
		React.createElement("h1", null, "The World's Most Annoying Form"),
		
		React.createElement("input", {
			type: "text",
			placeholder: "First Name",
			onChange: handleChange,
			name: "firstName",
			value: formData.firstName
		}),
		
		React.createElement("input", {
			type: "text",
			placeholder: "Last Name",
			onChange: handleChange,
			name: "lastName",
			value: formData.lastName
		}),
		
		React.createElement("input", {
			type: "email",
			placeholder: "Email",
			onChange: handleChange,
			name: "email",
			value: formData.email
		}),

		React.createElement("fieldset", null,
			React.createElement("legend", null, "Would you like to sign away all of the rights to your privacy?"),
			React.createElement("div", { className: "privacy-container" },
				React.createElement("label", null,
					React.createElement("input", {
						type: "radio",
						id: "yes",
						name: "privacyResponse",
						value: "yes",
						onChange: handleChange,
						checked: formData.privacyResponse === "yes"
					}),
					"Yes!"
				),
				React.createElement("label", null,
					React.createElement("input", {
						type: "radio",
						id: "no",
						name: "privacyResponse",
						value: "no",
						onChange: handleChange,
						checked: formData.privacyResponse === "no"
					}),
					"No."
				),
				React.createElement("label", null,
					React.createElement("input", {
						type: "radio",
						id: "absolutely",
						name: "privacyResponse",
						value: "absolutely",
						onChange: handleChange,
						checked: formData.privacyResponse === "absolutely"
					}),
					"Absolutely!"
				)
			)
		),

		React.createElement("fieldset", { className: "rating-container" },
			React.createElement("legend", null, "On a scale of 1-10, with 1 being the worst and 10 being the best, how would you rate this form?"),
			React.createElement("select", {
				onChange: handleChange,
				name: "rating",
				value: formData.rating
			},
				React.createElement("option", { value: "1" }, "1"),
				React.createElement("option", { value: "2" }, "2"),
				React.createElement("option", { value: "3" }, "3"),
				React.createElement("option", { value: "4" }, "4"),
				React.createElement("option", { value: "5" }, "5"),
				React.createElement("option", { value: "6" }, "6"),
				React.createElement("option", { value: "7" }, "7"),
				React.createElement("option", { value: "8" }, "8"),
				React.createElement("option", { value: "9" }, "9"),
				React.createElement("option", { value: "10" }, "10")
			)
		),

		React.createElement("label", { className: "marketing-label" },
			React.createElement("input", {
				type: "checkbox",
				name: "marketingResponse",
				onChange: handleChange,
				checked: formData.marketingResponse
			}),
			React.createElement("div", { className: "checkmark" }),
			React.createElement("span", null, "I would like to receive 20 marketing emails per day. ")
		),

		React.createElement("button", {
			className: formData.wantsToSubmit ? "move" : "",
			onFocus: fakeSubmit,
			onMouseEnter: fakeSubmit
		}, "Submit")
	)
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));

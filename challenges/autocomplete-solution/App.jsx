window.Header = function Header() {
    return React.createElement('header', null,
        React.createElement('div', null,
            React.createElement('div', { className: "header-icon-container" },
                React.createElement('img', { className: "header-icon", src: "challenges/autocomplete-solution/images/square-check-solid.svg" })
            ),
            React.createElement('h1', null, "AutoComplete")
        ),
        React.createElement('h2', null, "The Automated To-Do List")
    )
}

window.BottomBar = function BottomBar() {
    return React.createElement('footer', { className: "bottom-bar-container" },
        React.createElement('img', { className: "icon", src: "challenges/autocomplete-solution/images/reminder.svg" }),
        React.createElement('img', { className: "icon", src: "challenges/autocomplete-solution/images/add-collaborator.svg" }),
        React.createElement('img', { className: "icon", src: "challenges/autocomplete-solution/images/palette.svg" }),
        React.createElement('img', { className: "icon", src: "challenges/autocomplete-solution/images/add-image.svg" }),
        React.createElement('img', { className: "icon", src: "challenges/autocomplete-solution/images/more.svg" }),
        React.createElement('div', null,
            React.createElement('img', { className: "icon", src: "challenges/autocomplete-solution/images/undo.svg" }),
            React.createElement('img', { className: "icon", src: "challenges/autocomplete-solution/images/redo.svg" })
        )
    )
}

window.ToDoList = function ToDoList() {
	const savedData = window.savedData
	const [listData, setListData] = React.useState(savedData)
	const [newItemInput, setNewItemInput] = React.useState("")
	const [autoCompleteRequested, setAutoCompleteRequested] = React.useState(false)
	const [inputInFocus, setInputInFocus] = React.useState(false)

	function handleCheckBoxChange(event) {
		setListData(prevList => {
			return prevList.map(item => {
				return item.id === event.target.name
					? { ...item, complete: !item.complete }
					: item
			})
		})
	}

	function handleNewItemInputChange(event) {
		setNewItemInput(event.target.value)
	}
    
    const div = document.querySelector(".to-do-list-container")

	React.useEffect(() => {
		if (div) {
			div.scrollTop = div.scrollHeight
		}
	}, [listData])

	function handleEnter(event) {
		if (newItemInput.trim()) {
			if (event.key === "Enter") {
				setListData(prevList => {
					const newListItem = {
						text: event.target.value,
						complete: false,
						id: window.generateId(),
					}
					return [...prevList, newListItem]
				})
				setNewItemInput("")
			}
		}
	}

	function autoComplete() {
		setAutoCompleteRequested(true)
	}
	
	function toggleInputFocus() {
		setInputInFocus(!inputInFocus)
	}
	

	React.useEffect(() => {
		if (autoCompleteRequested) {
			let timeOut = setTimeout(() => {
				setAutoCompleteRequested(false)
				setListData(prevData => {
					return prevData.map(item => {
						return !item.complete ? { ...item, complete: true } : item
					})
				})
			}, 2000)
		}
	}, [autoCompleteRequested])

	const currentList = listData.map(item => {
		return React.createElement('div', { className: "to-do-list-item-container", key: item.id },
			React.createElement('label', { className: "checkbox-label" },
				React.createElement('input', {
					type: "checkbox",
					name: item.id,
					onChange: handleCheckBoxChange,
					checked: item.complete
				}),
				React.createElement('span', { className: "checkmark" }),
				React.createElement('p', { className: `to-do-list-item-text ${item.complete && "crossed-out"}` },
					item.text
				)
			),
			React.createElement('div', { className: "all-progress-bars-container" },
				!item.complete && autoCompleteRequested && React.createElement('div', { className: "progress-bar-container" },
					React.createElement('div', { className: "progress-bar-content" })
				)
			)
		)
	})
	
	return React.createElement('div', null,
		React.createElement('div', { className: "to-do-list-container" },
			...currentList,
			React.createElement('label', { className: "new-item-label" },
				React.createElement('img', {
					src: "challenges/autocomplete-solution/images/add-item.svg",
					className: `add-item-icon ${inputInFocus && "faded"}`
				}),
				React.createElement('input', {
					className: "new-item-input",
					type: "text",
					value: newItemInput,
					onKeyDown: handleEnter,
					onChange: handleNewItemInputChange,
					onFocus: toggleInputFocus,
					onBlur: toggleInputFocus
				})
			)
		),
		React.createElement('div', { className: "do-it-button-container" },
			React.createElement('button', { onClick: autoComplete }, "AutoComplete")
		)
	)
}

window.App = function App() {
    
  return React.createElement('div', { className: "wrapper" },
    React.createElement(window.Header),
    React.createElement(window.ToDoList),
    React.createElement(window.BottomBar)
  )
}
const diaryData = window.diaryData

window.App = function App() {

    const [activeModal, setActiveModal] = React.useState(null)

    const [theme, setTheme] = React.useState('light')

    React.useEffect(() => {

        document.body.className = theme

    }, [theme])

    const diaryCardElements = diaryData.map( day => {
        return React.createElement(window.DiaryCard, { key: day.id, ...day })
    })

    return React.createElement('div', null,
        React.createElement(window.Menu, { skip: false, setActiveModal }),
        React.createElement('main', { className: "main-container" },
            React.createElement('div', { className: "sub-header" },
                React.createElement('h3', null, "April Reports")
            ),
            ...diaryCardElements
        ),
        activeModal ? React.createElement(window.Modal, { modal: activeModal, onClose: () => setActiveModal(null), setTheme }) : null
    )
}
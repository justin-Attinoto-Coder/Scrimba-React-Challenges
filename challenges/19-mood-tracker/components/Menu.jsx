window.Menu = function Menu(props) {

    function scrollDown() {
        window.scrollTo({
            top: (window.innerHeight * 2),
            behavior: "smooth",
        })
    }

    React.useEffect(() => {
        if (props.skip) scrollDown()
    }, [])

    return React.createElement('div', { className: "menu-wrapper" },
        React.createElement('div', { className: "header-text-container" },
            React.createElement('h1', null, "Life Tracker")
        ),
        React.createElement('div', { className: "main-menu-container" },
            React.createElement('button', { className: "menu-item-button", onClick: () => props.setActiveModal('goals') },
                React.createElement('img', { className: "menu-icon", src: "./challenges/mood-tracker/images/goals.svg" }),
                React.createElement('p', null, "Goals")
            ),
            React.createElement('button', { className: "menu-item-button", onClick: () => props.setActiveModal('to-do-list') },
                React.createElement('img', { className: "menu-icon", src: "./challenges/mood-tracker/images/to-do-list.svg" }),
                React.createElement('p', null, "To Do List")
            ),
            React.createElement('button', { className: "menu-item-button", onClick: () => props.setActiveModal('reports') },
                React.createElement('img', { className: "menu-icon", src: "./challenges/mood-tracker/images/monthly-report.svg" }),
                React.createElement('p', null, "Reports")
            ),
            React.createElement('button', { className: "menu-item-button", onClick: () => props.setActiveModal('settings') },
                React.createElement('img', { className: "menu-icon", src: "./challenges/mood-tracker/images/settings.svg" }),
                React.createElement('p', null, "Settings")
            ),
            React.createElement('button', { className: "menu-item-button", onClick: () => props.setActiveModal('highlights') },
                React.createElement('img', { className: "menu-icon highlights", src: "./challenges/mood-tracker/images/highlights.svg" }),
                React.createElement('p', null, "Highlights")
            ),
            React.createElement('button', { className: "menu-item-button", onClick: () => props.setActiveModal('new-entry') },
                React.createElement('img', { className: "menu-icon", src: "./challenges/mood-tracker/images/new-entry.svg" }),
                React.createElement('p', null, "New Entry")
            )
        )
    )
}
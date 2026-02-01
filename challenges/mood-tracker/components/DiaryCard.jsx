window.DiaryCard = function DiaryCard(props) {

    const emotionElements = getElements(props.emotions)
    const activityElements = getElements(props.activities)

    function getElements(data) {
        return data.map(item => {
            return React.createElement('div',
                { key: Math.random().toString(36).substr(2, 9), className: "icon-and-text-container" },
                React.createElement('div', { className: "icon" }, item.icon),
                React.createElement('div', { className: "text-for-icon" }, item.text)
            )
        })
    }

    function getClasses() {
        const num = props.rating

        switch(true) {
            case num <= 30:
                return "red"
                break
            case num > 30 && num <=50:
                return "yellow"
                break
            case num > 50 && num <= 80:
                return "blue"
                break
            case num > 80:
                return "green"
                break
            }
    }

    return React.createElement('div', { className: "diary-card" },
        React.createElement('div', { className: "date-container" },
            React.createElement('p', null, props.date)
        ),
        React.createElement('div', { className: "rating-container" },
            React.createElement('div', { className: "rating-outline" },
                React.createElement('p', null, React.createElement('span', { className: "bold" }, "Rating:"), " ", props.rating, React.createElement('span', { className: "percent" }, "%")),
                React.createElement('div', { className: `rating-fill ${getClasses()}`, style: { width: `${props.rating}%` } })
            )
        ),
        React.createElement('div', { className: "emotion-and-activity-overall-container" },
            React.createElement('div', { className: "emotion-container" },
                React.createElement('h3', { className: "container-title" }, "Emotions"),
                React.createElement('div', { className: "list-of-elements-container" }, ...emotionElements)
            ),
            React.createElement('div', { className: "activity-container" },
                React.createElement('h3', { className: "container-title" }, "Activities"),
                React.createElement('div', { className: "list-of-elements-container" }, ...activityElements)
            )
        ),
        React.createElement('div', { className: "notes-container" },
            React.createElement('h3', null, "Notes"),
            React.createElement('p', null, props.note)
        )
    )
}
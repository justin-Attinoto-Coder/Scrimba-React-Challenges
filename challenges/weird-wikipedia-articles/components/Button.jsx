window.Button = function Button({setCurrentArticles, numberOfArticles}) {
    return React.createElement('div', { className: "button-container" },
        React.createElement('button', { onClick: () => setCurrentArticles(window.getArticles(numberOfArticles)) },
            React.createElement('span', { className: "button-emoji" }, "😲"),
            React.createElement('span', { className: "now" }, "Now!"),
            React.createElement('span', { className: "get" }, "Get New Articles")
        )
    )
}
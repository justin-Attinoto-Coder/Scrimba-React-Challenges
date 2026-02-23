window.Fire = function Fire({woodOnFire}) {
    if (woodOnFire) {
        return React.createElement('div', { className: "fire-container" },
            React.createElement('span', { className: "fire vibrate" }, "🔥")
        )
    } else {
        return null
    }
}
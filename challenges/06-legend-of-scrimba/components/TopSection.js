function TopSection({submitted}) {
    const classCondition = document.getElementsByClassName("name-input").length === 0
    return React.createElement("div", { className: "top-section" },
        React.createElement("h1", { className: submitted && !classCondition ? "second-fade-in" : null },
			!submitted || classCondition
			    ? "The Legend of Scrimba"
					: "A hero has risen! The hero's name is: "
		),
        React.createElement("div", { className: "image-container" },
            React.createElement("img", {
                className: !submitted || classCondition ? null : "fade-out-and-in",
                src: !submitted || classCondition ? "challenges/06-legend-of-scrimba/images/character1.png" : "challenges/06-legend-of-scrimba/images/character2.png"
            })
        )
    )
}

export default TopSection
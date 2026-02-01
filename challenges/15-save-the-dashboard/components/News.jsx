import React from "react"

export default function News(props) {
	return (
		<div
			className="widget-wrapper News"
			style={{ gridArea: `area-${props.gridArea}` }}
		>
			<div className="widget News">
				<button
					className="remove-button"
					name="News"
					onClick={props.changeHandler}
				></button>
				<img src="./images/widgets/news.svg" />
			</div>
		</div>
	)
}
import React from "react"

export default function Weather(props) {
	return (
		<div
			className="widget-wrapper Weather"
			style={{ gridArea: `area-${props.gridArea}` }}
		>
			<div className="widget Weather">
				<button
					className="remove-button"
					name="Weather"
					onClick={props.changeHandler}
				></button>
				<img src="./images/widgets/weather.svg" />
			</div>
		</div>
	)
}
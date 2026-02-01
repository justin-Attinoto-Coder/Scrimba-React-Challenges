import React from "react"

export default function Quote(props) {
	return (
		<div
			className="widget-wrapper Quote"
			style={{ gridArea: `area-${props.gridArea}` }}
		>
			<div className="widget Quote">
				<button
					className="remove-button"
					name="Quote"
					onClick={props.changeHandler}
				></button>
				<img src="./images/widgets/quote.svg" />
			</div>
		</div>
	)
}
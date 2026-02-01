import React from "react"

export default function Stocks(props) {
	return (
		<div
			className="widget-wrapper Stocks"
			style={{ gridArea: `area-${props.gridArea}` }}
		>
			<div className="widget Stocks">
				<button
					className="remove-button"
					name="Stocks"
					onClick={props.changeHandler}
				></button>
				<img src="./images/widgets/stocks.svg" />
			</div>
		</div>
	)
}
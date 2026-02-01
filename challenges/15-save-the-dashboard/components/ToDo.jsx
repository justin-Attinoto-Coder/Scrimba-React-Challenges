import React from "react"

export default function ToDo(props) {
	return (
		<div
			className="widget-wrapper ToDo"
			style={{ gridArea: `area-${props.gridArea}` }}
		>
			<div className="widget ToDo">
				<button
					className="remove-button"
					name="ToDo"
					onClick={props.changeHandler}
				></button>

				<img src="./images/widgets/todo.svg" />
			</div>
		</div>
	)
}
import React from "react"

export default function App() {
	const [filter, setFilter] = React.useState({
		"--brightness": 1,
		"--contrast": 1,
		"--saturation": 1,
		"--hue-rotate": 0,
		"--blur": 0,
		"--sepia": 0,
		"--grayscale": 0,
		"--invert": 0,
		opacity: 1,
	})
	    
/* Challenge

    The range inputs don't yet do anything. Your task is to make them work as follows: 
    
        1. Whenever the user moves one of the range input sliders, its corresponding value in the 
           filter state object should be updated to be the value of the input, while preserving the other two values that have not changed. 
           
        2. With each update of the filter state object, the --brightness, --contrast, and 
           --saturation CSS variables that control the image's filter properties should be updated to be the values of their corresponding filter state object properties. The relevant CSS can be found on lines 1-13 of the styles.css file. 
		                       
        3. The initial values of the range inputs should be the inital values of their 
		   corresponding properties in the filter state object.   
		   
		4. Try to make your code as DRY as possible! 
*/
	function handleChange(event) {
		setFilter(prev => ({...prev, [event.target.name]: event.target.value}))
	}

	return (
		<div className="main-container">
			<h1><span>📷</span> Photo Editor <span>📷</span></h1>

			<div className="image-container">
				<img 
					style={{
						filter: `brightness(${filter["--brightness"]}) contrast(${filter["--contrast"]}) saturate(${filter["--saturation"]}) hue-rotate(${filter["--hue-rotate"]}deg) blur(${filter["--blur"]}px) sepia(${filter["--sepia"]}) grayscale(${filter["--grayscale"]}) invert(${filter["--invert"]})`,
						opacity: filter.opacity
					}}
					src="./images/kunal-goswami-CuUn__aMGD4-unsplash.jpg" 
				/>
			</div>

			<form>
				<label>
					<input
						type="range"
						name="--brightness"
						min={0}
						max={2}
						step={0.1}
						onChange={handleChange}
						value={filter["--brightness"]}
					/>
					<span>Brightness</span>
				</label>

				<label>
					<input
						type="range"
						name="--contrast"
						min={0}
						max={2}
						step={0.1}
						onChange={handleChange}
						value={filter["--contrast"]}
					/>
					<span>Contrast</span>
				</label>

				<label>
					<input
						type="range"
						name="--saturation"
						min={0}
						max={2}
						step={0.1}
						onChange={handleChange}
						value={filter["--saturation"]}
					/>
					<span>Saturation</span>
				</label>

				<label>
					<input
						type="range"
						name="--hue-rotate"
						min={0}
						max={360}
						step={1}
						onChange={handleChange}
						value={filter["--hue-rotate"]}
					/>
					<span>Hue Rotate</span>
				</label>

				<label>
					<input
						type="range"
						name="--blur"
						min={0}
						max={10}
						step={0.1}
						onChange={handleChange}
						value={filter["--blur"]}
					/>
					<span>Blur</span>
				</label>

				<label>
					<input
						type="range"
						name="--sepia"
						min={0}
						max={1}
						step={0.1}
						onChange={handleChange}
						value={filter["--sepia"]}
					/>
					<span>Sepia</span>
				</label>

				<label>
					<input
						type="range"
						name="--grayscale"
						min={0}
						max={1}
						step={0.1}
						onChange={handleChange}
						value={filter["--grayscale"]}
					/>
					<span>Grayscale</span>
				</label>

				<label>
					<input
						type="range"
						name="--invert"
						min={0}
						max={1}
						step={0.1}
						onChange={handleChange}
						value={filter["--invert"]}
					/>
					<span>Invert</span>
				</label>

				<label>
					<input
						type="range"
						name="opacity"
						min={0}
						max={1}
						step={0.1}
						onChange={handleChange}
						value={filter.opacity}
					/>
					<span>Opacity</span>
				</label>
			</form>
		</div>
	)
}
window.Torch = function Torch({torchEquipped}) {
    return !torchEquipped && React.createElement('div', { className: "inner-torch-container" },
        React.createElement('img', { src: "challenges/fire-starter/images/torch.svg" }),
        React.createElement('div', { className: "torch-flame vibrate-less" }, "🔥")
    )
}

window.Fire = function Fire({woodOnFire}) {
    if (woodOnFire) {
        return React.createElement('div', { className: "fire-container" },
            React.createElement('span', { className: "fire vibrate" }, "🔥")
        )
    } else {
        return null
    }
}

window.App = function App() {
    
	const [torchEquipped, setTorchEquipped] = React.useState(false)
	const [woodKindling, setWoodKindling] = React.useState(false)
	const [woodOnFire, setWoodOnFire] = React.useState(false)
    
	
/*----- ❌ ⬇️ Code you don't have to worry about! ❌ ⬇️️ ️----------- */  
    const [cursorPosition, setCursorPosition] = React.useState({x: null, y: null})
	const kindleClass = woodKindling && !woodOnFire && "kindle"
   
    window.runBackgroundEffects(
	    torchEquipped,
	    woodOnFire,
	    setWoodKindling,
	    setWoodOnFire,
	    setCursorPosition
    )
	
	let torchStyle = {
		position: "absolute",
        left: cursorPosition.x - 10,
		top: cursorPosition.y - 60,
	}
/*----------------------------------------------------------------- */  

	function toggleTorch() {
		  setTorchEquipped(!torchEquipped)
	  }
	  
	function handleMouseEnter() {
		if (torchEquipped) {
			setWoodKindling(true)
		}
	}
	
	function handleMouseLeave() {
		if (torchEquipped && woodKindling) {
			setWoodOnFire(true)
		}
	}

	return React.createElement('div', { onMouseUp: toggleTorch, className: `wrapper ${torchEquipped && "relative no-cursor"}` },
		React.createElement('div', { className: `game-area ${!torchEquipped && "relative"}` },
			React.createElement('div', { onMouseDown: toggleTorch, className: `torch-container ${torchEquipped && "torch-equipped"}`, style: torchEquipped ? torchStyle : null },
				React.createElement(window.Torch)
			),
			React.createElement('div', { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, className: `wood-container ${kindleClass}` },
				"🪵",
				React.createElement(window.Fire, { woodOnFire: woodOnFire })
			)
		)
	)
}
window.Torch = function Torch({torchEquipped}) {
    return !torchEquipped && React.createElement('div', { className: "inner-torch-container" },
        React.createElement('img', { src: "./images/torch.svg" }),
        React.createElement('div', { className: "torch-flame vibrate-less" }, "🔥")
    )
}
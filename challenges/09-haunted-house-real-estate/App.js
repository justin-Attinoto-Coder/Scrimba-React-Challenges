window.App = function App() {

	const houseCards = window.housesForSale.map((houseData, index, array) => {
		return React.createElement(window.HouseCard, {
			key: houseData.id,
			houseData: houseData,
			index: index,
			array: array
		})
	})

    return React.createElement('div', { className: "wrapper" },
        React.createElement('header', null,
            React.createElement('img', { className: "logo", src: "challenges/09-haunted-house-real-estate/images/logo.png", alt: "Logo" })
        ),
        React.createElement('div', { className: "house-cards-container" },
            ...houseCards
        )
    )
}
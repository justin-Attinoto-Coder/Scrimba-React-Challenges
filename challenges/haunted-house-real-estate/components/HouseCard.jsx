window.HouseCard = function HouseCard({houseData, index, array}) {
    return React.createElement('div', { className: "house-card" },
        React.createElement('p', null, `Listing ${index + 1} of ${array.length}`),
        React.createElement('img', { src: houseData.image }),
        React.createElement('div', null,
            React.createElement('ul', null,
                React.createElement('li', null,
                    React.createElement('span', null, 'Price:'),
                    houseData.price
                ),
                React.createElement('li', null,
                    React.createElement('span', null, 'Location:'),
                    houseData.location
                ),
                React.createElement('li', null,
                    React.createElement('span', null, 'Square Feet:'),
                    houseData.squareFeet
                ),
                React.createElement('li', null,
                    React.createElement('span', null, 'Acres:'),
                    houseData.acres
                ),
                React.createElement('li', null,
                    React.createElement('span', null, 'Year Built:'),
                    houseData.yearBuilt
                ),
                React.createElement('li', null,
                    React.createElement('span', null, 'Bedrooms:'),
                    houseData.bedrooms
                ),
                React.createElement('li', null,
                    React.createElement('span', null, 'Bathrooms:'),
                    houseData.bathrooms
                ),
                React.createElement('li', null,
                    React.createElement('span', null, 'Other Rooms:'),
                    houseData.otherRooms
                ),
                React.createElement('li', null,
                    React.createElement('span', null, 'Garage:'),
                    houseData.garage ? "Yes" : "No"
                ),
                React.createElement('li', null,
                    React.createElement('span', null, 'Air Conditioning:'),
                    houseData.airConditioning ? "Yes" : "No"
                ),
                React.createElement('li', null,
                    React.createElement('span', null, 'Heating:'),
                    houseData.heating ? "Yes" : "No"
                ),
                React.createElement('li', null,
                    React.createElement('span', null, 'Haunted:'),
                    houseData.haunted ? "Yes" : "No"
                )
            )
        )
    )
}
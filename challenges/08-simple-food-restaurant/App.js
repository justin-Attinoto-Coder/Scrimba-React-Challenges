function App() {
    const [activeSection, setActiveSection] = React.useState('home')
    const [selectedFood, setSelectedFood] = React.useState(null)

    const menuItems = [
        {
            id: 'hotdog',
            name: 'Classic Hot Dog',
            price: '$4.99',
            description: 'Juicy beef frank on a toasted bun with mustard, ketchup, and onions',
            image: 'challenges/08-simple-food-restaurant/images/hotdogs.jpg'
        },
        {
            id: 'hamburger',
            name: 'Cheeseburger Deluxe',
            price: '$7.99',
            description: 'Half-pound beef patty with melted cheese, lettuce, tomato, and pickles',
            image: 'challenges/08-simple-food-restaurant/images/hamburger.jpg'
        },
        {
            id: 'sandwich',
            name: 'Club Sandwich',
            price: '$6.99',
            description: 'Triple-decker turkey, bacon, lettuce, tomato, and mayo on toasted bread',
            image: 'challenges/08-simple-food-restaurant/images/sandwich.jpg'
        },
        {
            id: 'fries',
            name: 'Crispy Fries',
            price: '$3.49',
            description: 'Golden, crispy fries seasoned with sea salt',
            image: 'challenges/08-simple-food-restaurant/images/fries.jpg'
        },
        {
            id: 'drink',
            name: 'Soda Fountain',
            price: '$2.49',
            description: 'Your choice of Coke, Sprite, or Root Beer from our vintage fountain',
            image: 'challenges/08-simple-food-restaurant/images/soda.jpg'
        }
    ]

    const handleFoodClick = (foodId) => {
        setSelectedFood(selectedFood === foodId ? null : foodId)
        // Add a fun animation effect
        const element = document.querySelector(`[data-food="${foodId}"]`)
        if (element) {
            element.style.animation = 'bounce 0.6s ease'
            setTimeout(() => {
                element.style.animation = ''
            }, 600)
        }
    }

    const renderMenu = () => React.createElement("div", { className: "menu-section" },
        React.createElement("h2", null, "Our Menu"),
        React.createElement("div", { className: "menu-grid" },
            menuItems.map(item => React.createElement("div", {
                key: item.id,
                className: `menu-item ${selectedFood === item.id ? 'selected' : ''}`,
                "data-food": item.id,
                onClick: () => handleFoodClick(item.id)
            },
                React.createElement("div", { className: "menu-item-image" },
                    React.createElement("img", { src: item.image, alt: item.name })
                ),
                React.createElement("div", { className: "menu-item-content" },
                    React.createElement("h3", null, item.name),
                    React.createElement("p", { className: "price" }, item.price),
                    React.createElement("p", { className: "description" }, item.description)
                ),
                selectedFood === item.id && React.createElement("div", { className: "selected-indicator" }, "✓ Added to order!")
            ))
        )
    )

    const renderAbout = () => React.createElement("div", { className: "about-section" },
        React.createElement("h2", null, "About Simple Food Restaurant"),
        React.createElement("div", { className: "about-content" },
            React.createElement("div", { className: "about-text" },
                React.createElement("p", null, "Founded in 1952, Simple Food Restaurant has been serving up honest, no-frills American comfort food for over 70 years. We believe that great food doesn't need to be complicated."),
                React.createElement("p", null, "Our philosophy is simple: use fresh ingredients, cook with care, and serve with a smile. No fancy foams, no molecular gastronomy, just good old-fashioned food done right."),
                React.createElement("p", null, "From our signature hot dogs to our juicy burgers and classic sandwiches, every item on our menu is made fresh to order using recipes that have been perfected over generations.")
            ),
            React.createElement("div", { className: "about-stats" },
                React.createElement("div", { className: "stat" },
                    React.createElement("span", { className: "stat-number" }, "70+"),
                    React.createElement("span", { className: "stat-label" }, "Years of Service")
                ),
                React.createElement("div", { className: "stat" },
                    React.createElement("span", { className: "stat-number" }, "10K+"),
                    React.createElement("span", { className: "stat-label" }, "Happy Customers")
                ),
                React.createElement("div", { className: "stat" },
                    React.createElement("span", { className: "stat-number" }, "5"),
                    React.createElement("span", { className: "stat-label" }, "Menu Items")
                )
            )
        )
    )

    const renderHoursLocation = () => React.createElement("div", { className: "hours-location-section" },
        React.createElement("h2", null, "Hours & Location"),
        React.createElement("div", { className: "location-info" },
            React.createElement("div", { className: "location-details" },
                React.createElement("h3", null, "📍 Find Us"),
                React.createElement("p", null, "123 Main Street", React.createElement("br"), "Downtown District", React.createElement("br"), "Simple City, SC 12345"),
                React.createElement("p", null, "📞 (555) 123-SIMPLE")
            ),
            React.createElement("div", { className: "hours-details" },
                React.createElement("h3", null, "🕐 Hours"),
                React.createElement("div", { className: "hours-grid" },
                    React.createElement("div", { className: "day" }, "Monday - Friday"),
                    React.createElement("div", { className: "time" }, "7:00 AM - 9:00 PM"),
                    React.createElement("div", { className: "day" }, "Saturday"),
                    React.createElement("div", { className: "time" }, "8:00 AM - 10:00 PM"),
                    React.createElement("div", { className: "day" }, "Sunday"),
                    React.createElement("div", { className: "time" }, "9:00 AM - 8:00 PM")
                ),
                React.createElement("p", { className: "special-note" }, "🌟 Open 365 days a year!")
            )
        )
    )

    return React.createElement("div", null,
        React.createElement("header", null,
            React.createElement("div", { className: "button-container" },
                React.createElement("button", {
                    className: activeSection === 'menu' ? 'active' : '',
                    onClick: () => setActiveSection(activeSection === 'menu' ? 'home' : 'menu')
                }, "Our Menu"),
                React.createElement("button", {
                    className: activeSection === 'about' ? 'active' : '',
                    onClick: () => setActiveSection(activeSection === 'about' ? 'home' : 'about')
                }, "About"),
                React.createElement("button", {
                    className: activeSection === 'hours' ? 'active' : '',
                    onClick: () => setActiveSection(activeSection === 'hours' ? 'home' : 'hours')
                }, "Hours & Location")
            )
        ),
        React.createElement("main", null,
            activeSection === 'home' && React.createElement(React.Fragment, null,
                React.createElement("h1", { className: "logo-container" }, "Simple Food Restaurant"),
                React.createElement("p", { className: "info-container" },
                    "We make simple food for simple people. Want a sandwich? You got it. A hot dog? Coming right up. Poached salmon eggs with fire-roasted asparagus fritters hand-glazed in locally-sourced artisanal honey? Get out of here. Try the Fancy Food Cafe across the street."
                ),
                React.createElement("div", { className: "image-container" },
                    React.createElement("div", { className: "image-wrapper" },
                        React.createElement("img", {
                            className: "hot-dog",
                            src: "challenges/08-simple-food-restaurant/images/hotdogs.jpg",
                            alt: "Hot dogs",
                            "data-food": "hotdog",
                            onClick: () => handleFoodClick('hotdog')
                        }),
                        selectedFood === 'hotdog' && React.createElement("div", { className: "food-selected" }, "🌭 Selected!")
                    ),
                    React.createElement("div", { className: "image-wrapper" },
                        React.createElement("img", {
                            src: "challenges/08-simple-food-restaurant/images/sandwich.jpg",
                            alt: "Sandwich",
                            "data-food": "sandwich",
                            onClick: () => handleFoodClick('sandwich')
                        }),
                        selectedFood === 'sandwich' && React.createElement("div", { className: "food-selected" }, "🥪 Selected!")
                    ),
                    React.createElement("div", { className: "image-wrapper" },
                        React.createElement("img", {
                            src: "challenges/08-simple-food-restaurant/images/hamburger.jpg",
                            alt: "Hamburger",
                            "data-food": "hamburger",
                            onClick: () => handleFoodClick('hamburger')
                        }),
                        selectedFood === 'hamburger' && React.createElement("div", { className: "food-selected" }, "🍔 Selected!")
                    )
                )
            ),
            activeSection === 'menu' && renderMenu(),
            activeSection === 'about' && renderAbout(),
            activeSection === 'hours' && renderHoursLocation()
        ),
        React.createElement("footer", null,
            React.createElement("p", null,
                "Made by ",
                React.createElement("a", {
                    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Cheeky Coding Company"),
                "™."
            )
        )
    )
}

export default App

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App))
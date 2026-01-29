import React, { useState } from "react"

/* Challenge:

This webpage was created by inserting HTML elements into the DOM with vanilla JS. Your task is to convert the JS into React JSX and render it to the page with React. Here's what we want:

        1. The page should be rendered by a single functional React component, which is composed of
           other functional components and elements, written in JSX.

        2. The final result should be indistinguishable from the current page (unless you're doing
           a bonus challenge).

        3. All of the current JS should be deleted by the end.

        4. The code should be modular and well-organized.

Bonus: Wow me! Add state-of-the-art gradients, animations, and unique visual flair to make this challenge stand out with a fresh, modern feel.
*/

export default function App() {
    const [activeSection, setActiveSection] = useState('home')
    const [selectedFood, setSelectedFood] = useState(null)

    const menuItems = [
        {
            id: 'hotdog',
            name: 'Classic Hot Dog',
            price: '$4.99',
            description: 'Juicy beef frank on a toasted bun with mustard, ketchup, and onions',
            image: 'images/hotdogs.jpg'
        },
        {
            id: 'hamburger',
            name: 'Cheeseburger Deluxe',
            price: '$7.99',
            description: 'Half-pound beef patty with melted cheese, lettuce, tomato, and pickles',
            image: 'images/hamburger.jpg'
        },
        {
            id: 'sandwich',
            name: 'Club Sandwich',
            price: '$6.99',
            description: 'Triple-decker turkey, bacon, lettuce, tomato, and mayo on toasted bread',
            image: 'images/sandwich.jpg'
        },
        {
            id: 'fries',
            name: 'Crispy Fries',
            price: '$3.49',
            description: 'Golden, crispy fries seasoned with sea salt',
            image: 'images/fries.jpg'
        },
        {
            id: 'drink',
            name: 'Soda Fountain',
            price: '$2.49',
            description: 'Your choice of Coke, Sprite, or Root Beer from our vintage fountain',
            image: 'images/soda.jpg'
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

    const renderMenu = () => (
        <div className="menu-section">
            <h2>Our Menu</h2>
            <div className="menu-grid">
                {menuItems.map(item => (
                    <div
                        key={item.id}
                        className={`menu-item ${selectedFood === item.id ? 'selected' : ''}`}
                        data-food={item.id}
                        onClick={() => handleFoodClick(item.id)}
                    >
                        <div className="menu-item-image">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="menu-item-content">
                            <h3>{item.name}</h3>
                            <p className="price">{item.price}</p>
                            <p className="description">{item.description}</p>
                        </div>
                        {selectedFood === item.id && (
                            <div className="selected-indicator">
                                ✓ Added to order!
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )

    const renderAbout = () => (
        <div className="about-section">
            <h2>About Simple Food Restaurant</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>Founded in 1952, Simple Food Restaurant has been serving up honest, no-frills American comfort food for over 70 years. We believe that great food doesn't need to be complicated.</p>
                    <p>Our philosophy is simple: use fresh ingredients, cook with care, and serve with a smile. No fancy foams, no molecular gastronomy, just good old-fashioned food done right.</p>
                    <p>From our signature hot dogs to our juicy burgers and classic sandwiches, every item on our menu is made fresh to order using recipes that have been perfected over generations.</p>
                </div>
                <div className="about-stats">
                    <div className="stat">
                        <span className="stat-number">70+</span>
                        <span className="stat-label">Years of Service</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">10K+</span>
                        <span className="stat-label">Happy Customers</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">5</span>
                        <span className="stat-label">Menu Items</span>
                    </div>
                </div>
            </div>
        </div>
    )

    const renderHoursLocation = () => (
        <div className="hours-location-section">
            <h2>Hours & Location</h2>
            <div className="location-info">
                <div className="location-details">
                    <h3>📍 Find Us</h3>
                    <p>123 Main Street<br />
                    Downtown District<br />
                    Simple City, SC 12345</p>
                    <p>📞 (555) 123-SIMPLE</p>
                </div>
                <div className="hours-details">
                    <h3>🕐 Hours</h3>
                    <div className="hours-grid">
                        <div className="day">Monday - Friday</div>
                        <div className="time">7:00 AM - 9:00 PM</div>
                        <div className="day">Saturday</div>
                        <div className="time">8:00 AM - 10:00 PM</div>
                        <div className="day">Sunday</div>
                        <div className="time">9:00 AM - 8:00 PM</div>
                    </div>
                    <p className="special-note">🌟 Open 365 days a year!</p>
                </div>
            </div>
        </div>
    )

    return (
        <div>
            <header>
                <div className="button-container">
                    <button
                        className={activeSection === 'menu' ? 'active' : ''}
                        onClick={() => setActiveSection(activeSection === 'menu' ? 'home' : 'menu')}
                    >
                        Our Menu
                    </button>
                    <button
                        className={activeSection === 'about' ? 'active' : ''}
                        onClick={() => setActiveSection(activeSection === 'about' ? 'home' : 'about')}
                    >
                        About
                    </button>
                    <button
                        className={activeSection === 'hours' ? 'active' : ''}
                        onClick={() => setActiveSection(activeSection === 'hours' ? 'home' : 'hours')}
                    >
                        Hours & Location
                    </button>
                </div>
            </header>

            <main>
                {activeSection === 'home' && (
                    <>
                        <h1 className="logo-container">Simple Food Restaurant</h1>

                        <p className="info-container">
                            We make simple food for simple people. Want a sandwich? You got it.
                            A hot dog? Coming right up. Poached salmon eggs with fire-roasted asparagus fritters hand-glazed in locally-sourced artisanal honey? Get out of here. Try the Fancy Food Cafe across the street.
                        </p>

                        <div className="image-container">
                            <div className="image-wrapper">
                                <img
                                    className="hot-dog"
                                    src="images/hotdogs.jpg"
                                    alt="Hot dogs"
                                    data-food="hotdog"
                                    onClick={() => handleFoodClick('hotdog')}
                                />
                                {selectedFood === 'hotdog' && <div className="food-selected">🌭 Selected!</div>}
                            </div>
                            <div className="image-wrapper">
                                <img
                                    src="images/sandwich.jpg"
                                    alt="Sandwich"
                                    data-food="sandwich"
                                    onClick={() => handleFoodClick('sandwich')}
                                />
                                {selectedFood === 'sandwich' && <div className="food-selected">🥪 Selected!</div>}
                            </div>
                            <div className="image-wrapper">
                                <img
                                    src="images/hamburger.jpg"
                                    alt="Hamburger"
                                    data-food="hamburger"
                                    onClick={() => handleFoodClick('hamburger')}
                                />
                                {selectedFood === 'hamburger' && <div className="food-selected">🍔 Selected!</div>}
                            </div>
                        </div>
                    </>
                )}

                {activeSection === 'menu' && renderMenu()}
                {activeSection === 'about' && renderAbout()}
                {activeSection === 'hours' && renderHoursLocation()}
            </main>

            <footer>
                <p>
                    Made by <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Cheeky Coding Company</a>™.
                </p>
            </footer>
        </div>
    )
}
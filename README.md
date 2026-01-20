# Scrimba React Challenges

A scrimba led course introducing concepts for creating 63 react challenges by Daniel Beckrose.

## 🎯 Project Overview

This repository contains a collection of React challenges designed to help you master modern React development. Each challenge focuses on specific React concepts and gradually increases in complexity.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/scrimba-react-challenges.git

# Navigate to the project directory
cd scrimba-react-challenges

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will open at `http://localhost:5173` (or another port if 5173 is busy).

## 📚 Challenges

### Challenge 01: Video Game Button ✅

**Difficulty:** Beginner  
**Topics:** useState, onClick, conditional rendering

Create a Play/Pause button with React state management and beautiful 3D styling effects.

**Key Learning Objectives:**
- Managing state with `useState`
- Handling click events
- Conditional rendering with ternary operators
- Applying dynamic CSS classes

**Location:** `/challenges/01-video-game-button/`

### Challenge 02: React Study Buddy ✅

**Difficulty:** Beginner  
**Topics:** useState, class toggling, conditional classes

Build a flip-card flashcard that toggles between a question side and an answer side with a smooth 3D rotation.

**Key Learning Objectives:**
- Toggling class names based on state
- Driving CSS animations from React state
- Mapping arrays to list items with keys

**Location:** `/challenges/02-study-buddy/`

### Challenge 03: RPG Character Creator ✅

**Difficulty:** Beginner  
**Topics:** useState, complex objects, nested state

Create an RPG character with equipment, stats, and attack options using a complex nested state object.

**Key Learning Objectives:**
- Managing complex state with nested objects
- Working with arrays in state
- Randomizing data and updating state
- Component composition and prop passing

**Location:** `/challenges/03-rpg-character-creator/`

## 🎨 Features

- **Beautiful Landing Page:** Modern, responsive design with gradient animations
- **Progress Tracking:** Visual progress indicators showing completed challenges
- **Organized Structure:** Each challenge in its own directory with hints and credits
- **State-of-the-art Styling:** Modern CSS with animations, gradients, and glassmorphism effects

## 📁 Project Structure

```
scrimba-react-challenges/
├── src/                          # Landing page source
│   ├── main.jsx                  # Application entry point
│   ├── LandingPage.jsx          # Main landing page component
│   ├── LandingPage.css          # Landing page styles
│   └── index.css                 # Global styles
├── challenges/                   # Individual challenges
│   └── 01-video-game-button/    # Challenge 01
│       ├── App.jsx              # Challenge component
│       ├── index.jsx            # Challenge entry point
│       ├── style.css            # Challenge styles
│       ├── credits.md           # Attribution
│       ├── hints/               # Progressive hints
│       └── images/              # Challenge assets
├── index.html                    # HTML template
├── vite.config.js               # Vite configuration
└── package.json                 # Project dependencies
```

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎓 Learning Path

Each challenge is designed to build upon previous concepts:

1. **Beginner Challenges** - Basic React concepts (state, props, events)
2. **Intermediate Challenges** - Advanced hooks, context, and patterns
3. **Advanced Challenges** - Performance optimization, complex state management

## 🤝 Contributing

Contributions are welcome! Feel free to submit pull requests or open issues.

## 📝 License

ISC

## 🙏 Credits

- Course by Daniel Beckrose via Scrimba
- Button styles adapted from [UIverse](https://uiverse.io/Madflows/terrible-catfish-72)
- Backgrounds via Unsplash: gaming photo by Lala Azizli; desk study photo by Kelly Sikkema


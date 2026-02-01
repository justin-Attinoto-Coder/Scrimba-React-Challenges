import React from 'react'
import './LandingPage.css'

export default function LandingPage() {
  const challenges = [
    {
      id: 1,
      title: "Video Game Button",
      description: "Create a Play/Pause button with React state and beautiful 3D styling",
      completed: true,
      difficulty: "Beginner",
      topics: ["useState", "onClick", "conditional rendering"],
      url: "video-game-button.html"
    },
    {
      id: 2,
      title: "React Study Buddy",
      description: "Flip a flashcard between question and answer with smooth 3D motion",
      completed: true,
      difficulty: "Beginner",
      topics: ["useState", "class toggling", "conditional classes"],
      url: "study-buddy.html"
    },
    {
      id: 3,
      title: "World's Most Annoying Form",
      description: "Master controlled forms with this hilariously evil form that fights back",
      completed: true,
      difficulty: "Beginner",
      topics: ["controlled inputs", "forms", "onChange"],
      url: "annoying-form.html"
    },
    {
      id: 4,
      title: "RPG Character Creator",
      description: "Build a character with stats, equipment, and attacks using complex state",
      completed: true,
      difficulty: "Beginner",
      topics: ["useState", "complex objects", "nested state"],
      url: "rpg-character-creator.html"
    },
    {
      id: 5,
      title: "RPG Hero Name Input",
      description: "Create a form where users can enter their RPG character's name, which gets transformed into a heroic title upon submission",
      completed: true,
      difficulty: "Beginner",
      topics: ["controlled inputs", "forms", "onSubmit", "state updates"],
      url: "rpg-name-input.html"
    },
    {
      id: 6,
      title: "The Legend of Scrimba",
      description: "The hero of this RPG needs a name! Set up a controlled input for the character's name, which gets transformed into a heroic title upon submission with smooth animations",
      completed: true,
      difficulty: "Beginner",
      topics: ["controlled inputs", "forms", "onSubmit", "state updates", "useEffect"],
      url: "legend-of-scrimba.html"
    },
    {
      id: 7,
      title: "Math-o-Matic Quiz Generator",
      description: "Build an interactive math quiz generator that creates random arithmetic problems and provides feedback on user answers with smooth animations and auto-advancing to new problems",
      completed: true,
      difficulty: "Intermediate",
      topics: ["useEffect", "conditional rendering", "state management", "timers"],
      url: "math-o-matic.html"
    },
    {
      id: 8,
      title: "Simple Food Restaurant",
      description: "Convert a vanilla JavaScript webpage that manipulates the DOM into a modern React application using JSX components",
      completed: true,
      difficulty: "Beginner",
      topics: ["JSX", "React components", "DOM conversion"],
      url: "simple-food-restaurant.html"
    },
    {
      id: 9,
      title: "Haunted House Real Estate",
      description: "Build a haunted house real estate listings page that displays property cards with images, prices, and spooky details using React components and props",
      completed: true,
      difficulty: "Beginner",
      topics: ["JSX", "React components", "props", "mapping arrays"],
      url: "haunted-house-real-estate.html"
    },
    {
      id: 10,
      title: "Original Calculator",
      description: "Build a fully functional calculator with complex state management, handling various calculation scenarios and edge cases",
      completed: true,
      difficulty: "Intermediate",
      topics: ["useState", "complex state", "event handling", "conditional logic"],
      url: "original-calculator.html"
    },
    {
      id: 11,
      title: "Top 100 Colors",
      description: "Display the top 100 colors in front-end development with ranking and hex codes using React components and array mapping",
      completed: true,
      difficulty: "Beginner",
      topics: ["JSX", "React components", "props", "mapping arrays"],
      url: "top-100-colors.html"
    },
    {
      id: 12,
      title: "Enemies in the Castle",
      description: "Create animated enemy characters that walk back and forth in a castle setting using React state and game logic",
      completed: true,
      difficulty: "Intermediate",
      topics: ["useState", "useEffect", "mapping arrays", "game logic"],
      url: "enemies-in-the-castle.html"
    },
    {
      id: 13,
      title: "Word Power",
      description: "Build a vocabulary learning app with word navigation and detailed definitions using efficient prop passing",
      completed: true,
      difficulty: "Intermediate",
      topics: ["useState", "props", "object destructuring", "component composition"],
      url: "word-power.html"
    },
    {
      id: 14,
      title: "Million Dollar Bank Account",
      description: "Build a secret code-protected bank account interface that grants access to a million dollars upon correct password entry",
      completed: true,
      difficulty: "Beginner",
      topics: ["useState", "controlled inputs", "form submission", "conditional rendering"],
      url: "million-dollar-bank-account.html"
    },
    {
      id: 15,
      title: "Save the Dashboard",
      description: "Build a customizable dashboard with draggable widgets that saves user configurations to localStorage for persistence across sessions",
      completed: true,
      difficulty: "Intermediate",
      topics: ["localStorage", "lazy state initialization", "useEffect", "drag and drop"],
      url: "save-the-dashboard.html"
    },
    {
      id: 16,
      title: "Stock Tracker",
      description: "Create a dynamic stock tracking component that displays real-time price changes with color-coded indicators and automatic updates",
      completed: true,
      difficulty: "Intermediate",
      topics: ["useState", "useEffect", "dynamic calculations", "conditional styling"],
      url: "stock.html"
    },
    {
      id: 17,
      title: "Grok-zilla-pedia",
      description: "Build an app that displays random funny articles from Grok-zilla-pedia with state-of-the-art CSS styling and animations",
      completed: true,
      difficulty: "Beginner",
      topics: ["useState", "array.map", "DRY principles", "random selection"],
      url: "weird-wikipedia-articles.html"
    },
    {
      id: 18,
      title: "Fire Starter",
      description: "Create an interactive game where you pick up a torch and light wood on fire using mouse events",
      completed: true,
      difficulty: "Intermediate",
      topics: ["useState", "useEffect", "mouse events", "conditional rendering"],
      url: "fire-starter.html"
    },
    {
      id: 19,
      title: "Mood Tracker",
      description: "Build a life tracker app with diary cards showing daily ratings, emotions, activities, and notes",
      completed: true,
      difficulty: "Beginner",
      topics: ["useState", "array.map", "DRY principles", "random selection"],
      url: "mood-tracker.html"
    },
    {
      id: 20,
      title: "AutoComplete Solution",
      description: "Build an automated to-do list with focus effects and auto-complete functionality",
      completed: true,
      difficulty: "Intermediate",
      topics: ["useState", "controlled inputs", "useEffect", "conditional rendering"],
      url: "autocomplete-solution.html"
    }
  ]

  return (
    <div className="landing-page">
      <header className="hero">
        <h1 className="hero-title">
          <span className="gradient-text">Scrimba React Challenges</span>
        </h1>
        <p className="hero-subtitle">
          63 React challenges to master modern React development
        </p>
        <div className="stats">
          <div className="stat-card">
            <div className="stat-number">{challenges.filter(c => c.completed).length}</div>
            <div className="stat-label">Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{challenges.length}</div>
            <div className="stat-label">Total Challenges</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{Math.round((challenges.filter(c => c.completed).length / challenges.length) * 100)}%</div>
            <div className="stat-label">Progress</div>
          </div>
        </div>
      </header>

      <main className="challenges-grid">
        <h2 className="section-title">Available Challenges</h2>
        {challenges.map(challenge => (
          <div key={challenge.id} className={`challenge-card ${challenge.completed ? 'completed' : ''}`}>
            <div className="challenge-header">
              <span className="challenge-number">#{challenge.id}</span>
              {challenge.completed && <span className="completed-badge">✓ Completed</span>}
            </div>
            <h3 className="challenge-title">{challenge.title}</h3>
            <p className="challenge-description">{challenge.description}</p>
            <div className="challenge-topics">
              {challenge.topics.map((topic, idx) => (
                <span key={idx} className="topic-tag">{topic}</span>
              ))}
            </div>
            <div className="challenge-footer">
              <span className={`difficulty-badge ${challenge.difficulty.toLowerCase()}`}>
                {challenge.difficulty}
              </span>
              <a 
                href={challenge.url}
                className="view-challenge-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Challenge →
              </a>
            </div>
          </div>
        ))}

      </main>

      <footer className="footer">
        <p>Built with React & Vite • Scrimba Course by Daniel Beckrose</p>
      </footer>
    </div>
  )
}

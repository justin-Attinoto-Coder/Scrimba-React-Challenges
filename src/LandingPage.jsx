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
      topics: ["useState", "onClick", "conditional rendering"]
    },
    {
      id: 2,
      title: "React Study Buddy",
      description: "Flip a flashcard between question and answer with smooth 3D motion",
      completed: true,
      difficulty: "Beginner",
      topics: ["useState", "class toggling", "conditional classes"]
    },
    {
      id: 3,
      title: "World's Most Annoying Form",
      description: "Master controlled forms with this hilariously evil form that fights back",
      completed: true,
      difficulty: "Beginner",
      topics: ["controlled inputs", "forms", "onChange"]
    },
    {
      id: 4,
      title: "RPG Character Creator",
      description: "Build a character with stats, equipment, and attacks using complex state",
      completed: true,
      difficulty: "Beginner",
      topics: ["useState", "complex objects", "nested state"]
    },
    {
      id: 5,
      title: "RPG Hero Name Input",
      description: "Create a form where users can enter their RPG character's name, which gets transformed into a heroic title upon submission",
      completed: true,
      difficulty: "Beginner",
      topics: ["controlled inputs", "forms", "onSubmit", "state updates"]
    },
    {
      id: 6,
      title: "The Legend of Scrimba",
      description: "The hero of this RPG needs a name! Set up a controlled input for the character's name, which gets transformed into a heroic title upon submission with smooth animations",
      completed: true,
      difficulty: "Beginner",
      topics: ["controlled inputs", "forms", "onSubmit", "state updates", "useEffect"]
    },
    {
      id: 7,
      title: "Math-o-Matic Quiz Generator",
      description: "Build an interactive math quiz generator that creates random arithmetic problems and provides feedback on user answers with smooth animations and auto-advancing to new problems",
      completed: true,
      difficulty: "Intermediate",
      topics: ["useEffect", "conditional rendering", "state management", "timers"]
    },
    {
      id: 8,
      title: "Simple Food Restaurant",
      description: "Convert a vanilla JavaScript webpage that manipulates the DOM into a modern React application using JSX components",
      completed: true,
      difficulty: "Beginner",
      topics: ["JSX", "React components", "DOM conversion"]
    },
    {
      id: 9,
      title: "Haunted House Real Estate",
      description: "Build a haunted house real estate listings page that displays property cards with images, prices, and spooky details using React components and props",
      completed: true,
      difficulty: "Beginner",
      topics: ["JSX", "React components", "props", "mapping arrays"]
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
                href={`/challenge-${String(challenge.id).padStart(2, '0')}.html`}
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

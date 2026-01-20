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
      path: "/challenges/01-video-game-button"
    }
    // Future challenges will be added here
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
                href={challenge.path} 
                className="view-challenge-btn"
                onClick={(e) => {
                  e.preventDefault()
                  alert('To view this challenge, navigate to: ' + challenge.path + '\n\nIn development mode, you would set up routing to display each challenge.')
                }}
              >
                View Challenge →
              </a>
            </div>
          </div>
        ))}

        {/* Placeholder cards for upcoming challenges */}
        {[...Array(5)].map((_, idx) => (
          <div key={`upcoming-${idx}`} className="challenge-card upcoming">
            <div className="challenge-header">
              <span className="challenge-number">#{challenges.length + idx + 1}</span>
            </div>
            <h3 className="challenge-title">Coming Soon</h3>
            <p className="challenge-description">More exciting React challenges are on the way!</p>
            <div className="challenge-footer">
              <span className="difficulty-badge">TBA</span>
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

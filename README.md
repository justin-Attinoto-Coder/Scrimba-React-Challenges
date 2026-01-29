# <span style="background: linear-gradient(45deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Scrimba React Challenges</span> 🚀

<div align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react" alt="React"/>
  <img src="https://img.shields.io/badge/Vite-4.3.0-646CFF?style=for-the-badge&logo=vite" alt="Vite"/>
  <img src="https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js" alt="Node.js"/>
  <br>
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" alt="Status"/>
  <img src="https://img.shields.io/badge/Challenges-9%2B-orange?style=for-the-badge" alt="Challenges"/>
  <img src="https://img.shields.io/badge/Difficulty-Beginner%20to%20Expert-red?style=for-the-badge" alt="Difficulty"/>
</div>

---

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%); padding: 20px; border-radius: 15px; margin: 20px 0; color: white; text-align: center;">
  <h2 style="margin: 0; color: white;">🎯 Project Overview</h2>
  <p style="font-size: 1.1em; margin: 10px 0 0 0;">A scrimba led course introducing concepts for creating 63 react challenges by Daniel Beckrose. This repository contains a collection of React challenges designed to help you master modern React development through hands-on coding exercises.</p>
</div>

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

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 20px 0;">

<div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); padding: 20px; border-radius: 10px; color: white;">
<h3>✅ Challenge 01: Video Game Button</h3>
<p><strong>Difficulty:</strong> Beginner</p>
<p><strong>Topics:</strong> useState, onClick, conditional rendering</p>
<p>Create a Play/Pause button with React state management and beautiful 3D styling effects.</p>
<p><strong>Location:</strong> <code>/challenges/01-video-game-button/</code></p>
</div>

<div style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); padding: 20px; border-radius: 10px; color: white;">
<h3>✅ Challenge 02: React Study Buddy</h3>
<p><strong>Difficulty:</strong> Beginner</p>
<p><strong>Topics:</strong> useState, class toggling, conditional classes</p>
<p>Build a flip-card flashcard that toggles between a question side and an answer side with a smooth 3D rotation.</p>
<p><strong>Location:</strong> <code>/challenges/02-study-buddy/</code></p>
</div>

<div style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); padding: 20px; border-radius: 10px; color: white;">
<h3>✅ Challenge 03: World's Most Annoying Form</h3>
<p><strong>Difficulty:</strong> Beginner</p>
<p><strong>Topics:</strong> controlled inputs, forms, onChange</p>
<p>Build the world's most annoying form by making all inputs controlled—then watch it hilariously sabotage user inputs!</p>
<p><strong>Location:</strong> <code>/challenges/03-annoying-form/</code></p>
</div>

<div style="background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); padding: 20px; border-radius: 10px; color: black;">
<h3>✅ Challenge 04: RPG Character Creator</h3>
<p><strong>Difficulty:</strong> Beginner</p>
<p><strong>Topics:</strong> useState, complex objects, nested state</p>
<p>Create an RPG character with equipment, stats, and attack options using a complex nested state object.</p>
<p><strong>Location:</strong> <code>/challenges/04-rpg-character-creator/</code></p>
</div>

<div style="background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); padding: 20px; border-radius: 10px; color: white;">
<h3>✅ Challenge 05: RPG Hero Name Input</h3>
<p><strong>Difficulty:</strong> Beginner</p>
<p><strong>Topics:</strong> controlled inputs, forms, onSubmit, state updates</p>
<p>Create a form where users can enter their RPG character's name, which gets transformed into a heroic title upon submission.</p>
<p><strong>Location:</strong> <code>/challenges/05-rpg-name-input/</code></p>
</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px; color: white;">
<h3>✅ Challenge 06: The Legend of Scrimba</h3>
<p><strong>Difficulty:</strong> Beginner</p>
<p><strong>Topics:</strong> controlled inputs, forms, onSubmit, state updates, useEffect</p>
<p>The hero of this RPG needs a name! Set up a controlled input for the character's name, which gets transformed into a heroic title upon submission with smooth animations.</p>
<p><strong>Location:</strong> <code>/challenges/06-legend-of-scrimba/</code></p>
<p><strong>Prompt:</strong></p>
<p>The hero of this RPG needs a name! Your task is to set up an input element as follows:</p>
<ol>
<li>The input should be in the space marked below and have the following characteristics:
<ul>
<li>Class name: "name-input"</li>
<li>Type: "text."</li>
<li>Maximum length: 16 characters.</li>
<li>Placeholder text: "Enter Your Character's Name".</li>
<li>Required: yes</li>
<li>Disabled: yes if form has been submitted (see code on lines 7-11).</li>
</ul>
</li>
<li>The current value of playerName should be the current string the user has typed into the input. Whenever the user's input changes, the state should be updated.</li>
<li>The input should be controlled. Its value should be controlled by the playerName state.</li>
<li>You should only write your code below. Nothing needs to be changed or added elsewhere! If you complete these tasks correctly, you should receive a hero's name after you type in your character's name and click "Continue"!</li>
</ol>
</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px; color: white;">
<h3>✅ Challenge 07: Math-o-Matic Quiz Generator</h3>
<p><strong>Difficulty:</strong> Intermediate</p>
<p><strong>Topics:</strong> useEffect, conditional rendering, state management, timers</p>
<p>Build an interactive math quiz generator that creates random arithmetic problems and provides feedback on user answers with smooth animations and auto-advancing to new problems.</p>
<p><strong>Location:</strong> <code>/challenges/07-math-o-matic/</code></p>
<p><strong>Prompt:</strong></p>
<p>The app's current UX is bad because elements don't appear or disappear when they should; they're all lumped together. Your task is to improve this as follows:</p>
<ol>
<li>The &lt;h1&gt; element should only be rendered before the game has started. It should not be rendered afterward.</li>
<li>The &lt;div&gt; with the className "problem-container" should only be rendered if the game has started. Before that, it should not be rendered.</li>
<li>The buttons stored in the variable gamePlayButtons should only be rendered if the game has started. Otherwise, they should not be rendered, and the button stored in the variable startButton should appear instead.</li>
<li>The string stored in the answerStatus variable should only appear when the user has submitted an answer, and it should also disappear after 2 seconds.</li>
</ol>
<p><strong>Bonus:</strong> To make this challenge stand out, incorporate modern design elements with color gradients, smooth animations, and a unique visual flair that feels fresh and up-to-date, rather than just copying the provided styles.</p>
</div>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px; color: white;">
<h3>✅ Challenge 08: Simple Food Restaurant</h3>
<p><strong>Difficulty:</strong> Beginner</p>
<p><strong>Topics:</strong> JSX, React components, DOM conversion</p>
<p>Convert a vanilla JavaScript webpage that manipulates the DOM into a modern React application using JSX components.</p>
<p><strong>Location:</strong> <code>/challenges/08-simple-food-restaurant/</code></p>
<p><strong>Prompt:</strong></p>
<p>This webpage was created by inserting HTML elements into the DOM with vanilla JS. Your task is to convert the JS into React JSX and render it to the page with React. Here's what we want:</p>
<ol>
<li>The page should be rendered by a single functional React component, which is composed of other functional components and elements, written in JSX.</li>
<li>The final result should be indistinguishable from the current page (unless you're doing a bonus challenge).</li>
<li>All of the current JS should be deleted by the end.</li>
<li>The code should be modular and well-organized.</li>
</ol>
<p><strong>Bonus:</strong> Wow me! Add state-of-the-art gradients, animations, and unique visual flair to make this challenge stand out with a fresh, modern feel.</p>
</div>

<div style="background: linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%); padding: 20px; border-radius: 10px; color: white;">
<h3>✅ Challenge 09: Haunted House Real Estate</h3>
<p><strong>Difficulty:</strong> Beginner</p>
<p><strong>Topics:</strong> JSX, React components, props, mapping arrays</p>
<p>Build a haunted house real estate listings page that displays property cards with images, prices, and spooky details using React components and props.</p>
<p><strong>Location:</strong> <code>/challenges/09-haunted-house-real-estate/</code></p>
<p><strong>Prompt:</strong></p>
<p>Your task is to create a React component that renders a list of haunted houses for sale. Each house should be displayed as a card with an image, price, and various spooky details. The component should use props to pass data to individual house cards and map over an array of house data to render multiple cards.</p>
<p><strong>Bonus:</strong> Add eerie animations, ghostly gradients, and a haunted mansion atmosphere with faded background images and smooth hover effects to make this challenge truly spine-tingling!</p>
</div>

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

## 🚀 Upcoming Challenges Roadmap

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%); padding: 30px; border-radius: 15px; margin: 20px 0; color: white;">
  <h2 style="margin-top: 0; color: white; text-align: center;">🌟 What's Next?</h2>
  <p style="text-align: center; font-size: 1.1em;">We're continuously expanding this collection! Here's what's coming next:</p>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin-top: 20px;">
    
    <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px; backdrop-filter: blur(10px);">
      <h3 style="margin: 0; color: #ffd700;">Phase 2: Intermediate Challenges</h3>
      <ul style="margin: 10px 0 0 0; padding-left: 20px;">
        <li><strong>Challenge 07:</strong> Todo List App - CRUD operations, local storage</li>
        <li><strong>Challenge 08:</strong> Weather Dashboard - API integration, async/await</li>
        <li><strong>Challenge 09:</strong> Recipe Finder - Search functionality, filtering</li>
        <li><strong>Challenge 10:</strong> Memory Game - Game logic, animations</li>
      </ul>
    </div>
    
    <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px; backdrop-filter: blur(10px);">
      <h3 style="margin: 0; color: #ff6b6b;">Phase 3: Advanced Challenges</h3>
      <ul style="margin: 10px 0 0 0; padding-left: 20px;">
        <li><strong>Challenge 11:</strong> E-commerce Cart - Context API, complex state</li>
        <li><strong>Challenge 12:</strong> Social Media Feed - Infinite scroll, real-time updates</li>
        <li><strong>Challenge 13:</strong> Code Editor - Syntax highlighting, file management</li>
        <li><strong>Challenge 14:</strong> Data Visualization - Charts, graphs, interactivity</li>
      </ul>
    </div>
    
    <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px; backdrop-filter: blur(10px);">
      <h3 style="margin: 0; color: #4ecdc4;">Phase 4: Expert Challenges</h3>
      <ul style="margin: 10px 0 0 0; padding-left: 20px;">
        <li><strong>Challenge 15:</strong> Full-Stack Blog - Authentication, database integration</li>
        <li><strong>Challenge 16:</strong> Real-time Chat - WebSockets, user management</li>
        <li><strong>Challenge 17:</strong> Project Management Tool - Drag & drop, team collaboration</li>
        <li><strong>Challenge 18:</strong> AI-Powered Assistant - Machine learning integration</li>
      </ul>
    </div>
    
  </div>
</div>

## 🎨 Unique Features

<div style="display: flex; flex-wrap: wrap; gap: 15px; margin: 20px 0;">
  <span style="background: linear-gradient(45deg, #ff6b6b, #ffa500); color: white; padding: 8px 15px; border-radius: 20px; font-weight: bold;">✨ Glassmorphism Effects</span>
  <span style="background: linear-gradient(45deg, #4ecdc4, #44a08d); color: white; padding: 8px 15px; border-radius: 20px; font-weight: bold;">🎭 3D Animations</span>
  <span style="background: linear-gradient(45deg, #667eea, #764ba2); color: white; padding: 8px 15px; border-radius: 20px; font-weight: bold;">🌈 Dynamic Gradients</span>
  <span style="background: linear-gradient(45deg, #f093fb, #f5576c); color: white; padding: 8px 15px; border-radius: 20px; font-weight: bold;">🎯 Progressive Hints</span>
  <span style="background: linear-gradient(45deg, #4facfe, #00f2fe); color: white; padding: 8px 15px; border-radius: 20px; font-weight: bold;">📱 Responsive Design</span>
  <span style="background: linear-gradient(45deg, #43e97b, #38f9d7); color: white; padding: 8px 15px; border-radius: 20px; font-weight: bold;">🔥 Modern CSS</span>
</div>

## 🤝 Contributing

Contributions are welcome! Feel free to submit pull requests or open issues.

## 📝 License

ISC

## 🙏 Credits

- Course by Daniel Beckrose via Scrimba
- Button styles adapted from [UIverse](https://uiverse.io/Madflows/terrible-catfish-72)
- Backgrounds via Unsplash: gaming photo by Lala Azizli; desk study photo by Kelly Sikkema

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



---

<div align="center" style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%); border-radius: 15px; color: white;">
  <h2 style="margin: 0; color: white;">🚀 Ready to Level Up Your React Skills?</h2>
  <p style="font-size: 1.1em; margin: 10px 0;">Start with Challenge 01 and work your way through our carefully crafted learning path. Each challenge builds upon the previous one, ensuring you master React concepts progressively.</p>
  <p style="font-style: italic; margin: 10px 0;">"The best way to learn is by doing. Lets code! 💻"</p>
</div>

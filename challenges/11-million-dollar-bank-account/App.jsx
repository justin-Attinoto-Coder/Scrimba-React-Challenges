import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Message from './components/Message'

export default function App() {
    const [userInput, setUserInput] = useState('')
    const [verified, setVerified] = useState('neutral')
    const [accountBalance, setAccountBalance] = useState(0)
    
    function handleChange(event) {
        setUserInput(event.target.value)
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        
        if (userInput === 'scrimbank') {
            setVerified('correct')
            setAccountBalance(1000000)
        } else {
            setVerified('incorrect')
            setAccountBalance(0)
        }
    }
    
    return (
        <div className="app">
            <Header />
            <main>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Enter the secret code"
                        value={userInput}
                        onChange={handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
                <Message verified={verified} accountBalance={accountBalance} />
            </main>
            <Footer />
        </div>
    )
}
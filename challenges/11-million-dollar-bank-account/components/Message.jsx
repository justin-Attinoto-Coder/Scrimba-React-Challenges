export default function Message({ verified, accountBalance }) {
    let message = ''
    let iconSrc = ''
    let className = ''
    
    if (verified === 'correct') {
        message = 'Access Granted! Welcome to ScrimBank.'
        iconSrc = './images/correct-check.svg'
        className = 'correct'
    } else if (verified === 'incorrect') {
        message = 'Access Denied. Incorrect code.'
        iconSrc = './images/incorrect-check.svg'
        className = 'incorrect'
    } else {
        message = 'Enter the secret code to access your account.'
        iconSrc = './images/neutral-check.svg'
        className = 'neutral'
    }
    
    return (
        <div className="message">
            <img src={iconSrc} alt="Status" className={`check-icon ${className}`} />
            <p>{message}</p>
            {verified === 'correct' && (
                <p className="account-balance">Account Balance: ${accountBalance.toLocaleString()}</p>
            )}
        </div>
    )
}
window.Modal = function Modal({ modal, onClose, setTheme }) {
    let content
    switch (modal) {
        case 'goals':
            content = React.createElement('div', null,
                React.createElement('h2', null, 'Your Goals'),
                React.createElement('p', null, 'Stay healthy, Learn React, Travel the world')
            )
            break
        case 'to-do-list':
            content = React.createElement('div', null,
                React.createElement('h2', null, 'To Do List'),
                React.createElement('p', null, 'Buy groceries, Finish project, Call mom')
            )
            break
        case 'reports':
            content = React.createElement('div', null,
                React.createElement('h2', null, 'Reports'),
                React.createElement('p', null, 'Monthly report for April: Great progress!')
            )
            break
        case 'settings':
            content = React.createElement('div', null,
                React.createElement('h2', null, 'Settings'),
                React.createElement('div', { className: 'theme-buttons' },
                    React.createElement('button', { onClick: () => setTheme('light') }, 'Light Theme'),
                    React.createElement('button', { onClick: () => setTheme('dark') }, 'Dark Theme')
                )
            )
            break
        case 'highlights':
            content = React.createElement('div', null,
                React.createElement('h2', null, 'Highlights'),
                React.createElement('p', null, 'Best day: Completed 5 tasks!')
            )
            break
        case 'new-entry':
            content = React.createElement('div', null,
                React.createElement('h2', null, 'New Entry'),
                React.createElement('p', null, 'Add a new diary entry')
            )
            break
    }
    return React.createElement('div', { className: 'modal-overlay', onClick: onClose },
        React.createElement('div', { className: 'modal-content', onClick: e => e.stopPropagation() },
            content,
            React.createElement('button', { onClick: onClose }, 'Close')
        )
    )
}
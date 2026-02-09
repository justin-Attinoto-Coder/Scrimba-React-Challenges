import React from "react"

export default function BottomBar() {
    return (
        <footer className="bottom-bar-container">
            <img className="icon" src="../images/active/reminder.svg"/>
            <img className="icon" src="../images/active/add-collaborator.svg"/>
            <img className="icon" src="../images/active/palette.svg"/>
            <img className="icon" src="../images/active/add-image.svg"/>
            <img className="icon" src="../images/active/more.svg"/>
            <div>
                <img className="icon" src="../images/active/undo.svg"/>
                <img className="icon" src="../images/active/redo.svg"/>
            </div>
        </footer>
    )
}
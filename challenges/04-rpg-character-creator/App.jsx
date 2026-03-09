import React from 'react'
import ReactDOM from 'react-dom/client'
import Character from "./components/Character.js"
import StatusBars from "./components/StatusBars.js"
import Options from "./components/Options.js"
import Button from "./components/Button.js"

const noCharacter = {
    noData: {
        hat: false,
        shield: false,
        weapon: "sword",
        name: "Unknown",
        attackOptions: ["None", "None", "None", "None", "None", "None"],
        stats: {
            hp: 0,
            mp: 0,
            strength: 0
        }
    },
    noFunction: () => console.log("Character state not initialized")
}

const namesList = [
    "Aldric",
    "Brynn",
    "Celestia",
    "Drakon",
    "Elara",
    "Finnian",
    "Gwendolyn",
    "Hadrian",
    "Isolde",
    "Jareth"
]

const attackOptionsList = [
    "Fire Blast",
    "Ice Shard",
    "Thunder Strike",
    "Poison Cloud",
    "Healing Light",
    "Shadow Strike",
    "Wind Slash",
    "Earth Quake",
    "Holy Smite",
    "Dark Curse",
    "Lightning Bolt",
    "Water Wave"
]

function App() {
    
/* Challenge

    This video game character creator needs a starting character! Your task is to build one by doing the following: 
    
        1. Declare a state called characterData and a state setting function called 
           setCharacterData. 
           
        2. Make the value of the initial characterData state be an object with the following 
           properties and values.
           
        		Property		 	       Values  				  
			╷---------------╷------------------------------------╷					
		  	| hat           |	true or false                    |
			|---------------|------------------------------------|
			| shield        |	true or false                    |
			|---------------|------------------------------------|
            | weapon        |	The string "sword" or "staff" 	 |
			|---------------|------------------------------------|
            | name          |	A string* that is the name       | 
            |               |   of the character.                |
			|---------------|------------------------------------|
			| attackOptions |	An array of six strings*, each   |
            |               |   of which is a name of an attack. |
            |---------------|------------------------------------|
			| stats         |	An object with three properties: |
            |	            |      - hp: x**                     |
            |               |      - mp: y                       |
            |               |      - strength: z                 |
			¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯ 	
            
                *  You can write your own character name and attack options, or you can use ones 
                   from the namesList and attackOptionsList arrays, which have already been imported into this file.
                  
                ** For the stats, x, y and z should be any numbers between 0 and 100 (inclusive).
                
        3. You should see your character with the property values you specified appear on the 
           screen when you run your code. You should test your code by manually changing some of the characterData property values and seeing if you get the correct results. You should also click the "Toggle" button, which will randomly change the values by using the state setting function!  
    */

    /* ️⬇️️ ------------------ Write your code below! -----------------️️ ⬇️️ */
    
    const [characterData, setCharacterData] = React.useState({
        hat: true,
        shield: false,
        weapon: "sword",
        name: namesList[0],
        attackOptions: attackOptionsList.slice(0, 6),
        stats: {
            hp: 85,
            mp: 70,
            strength: 75
        }
    })
    
    /* ------------------------------------------------------------------
    
      ⚠️ ️Write your code above! The code below should not be changed! ⚠️
    
    --------------------------------------------------------------------*/

    let dataToUse, functionToUse
    
    try {
    	if (characterData) {
    		dataToUse = characterData
    	}
    } catch {
    	dataToUse = noCharacter.noData
    }
    
    try {
    	if (setCharacterData) {
    		functionToUse = setCharacterData
    	}
    } catch {
        functionToUse = noCharacter.noFunction
    }    

  return React.createElement("div", { className: "wrapper" },
    React.createElement(StatusBars, { characterData: dataToUse }),
    React.createElement(Character, { characterData: dataToUse }),
    React.createElement(Options, { characterData: dataToUse }),
    React.createElement(Button, { setCharacterData: functionToUse })
  )
}

export default App

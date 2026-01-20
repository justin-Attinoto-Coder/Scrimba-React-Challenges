# Hint: Setting Up Character State

Use `useState` to create the character data:

```jsx
const [characterData, setCharacterData] = React.useState({
    hat: true,
    shield: false,
    weapon: "sword",
    name: namesList[0], // or your own name
    attackOptions: attackOptionsList.slice(0, 6), // first 6 attacks
    stats: {
        hp: 85,
        mp: 70,
        strength: 75
    }
})
```

The state is a single object containing all character properties. You can pick values from the imported `namesList` and `attackOptionsList` arrays, or write your own!

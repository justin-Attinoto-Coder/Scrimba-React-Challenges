# Hint 1: Controlled Inputs

In React, a "controlled input" means the input's value is controlled by React state. This is different from uncontrolled inputs where the DOM manages the value.

To make an input controlled:
1. Add a `value` prop that equals the state variable
2. Add an `onChange` handler that updates the state when the user types

Example:
```jsx
const [name, setName] = useState("")

<input
    value={name}
    onChange={(e) => setName(e.target.value)}
/>
```

This ensures React is the single source of truth for the input's value.
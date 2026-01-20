# Hint: Toggling the flipped class

Add a boolean state (e.g., `isFlipped`) and flip it on each click:

```jsx
const [isFlipped, setIsFlipped] = React.useState(false)

<div
  className={`flash-card ${isFlipped ? "flipped" : ""}`}
  onClick={() => setIsFlipped(prev => !prev)}
>
  ...
</div>
```

Every click toggles the class name, which lets your CSS handle the rotation.

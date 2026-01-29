# Hint 2: Form Submission

When working with forms in React, you typically want to prevent the default browser behavior of reloading the page on submit.

Use `e.preventDefault()` in your submit handler:

```jsx
function handleSubmit(e) {
    e.preventDefault()
    // Your submit logic here
}
```

This allows you to handle the form data with JavaScript instead of letting the browser submit it.
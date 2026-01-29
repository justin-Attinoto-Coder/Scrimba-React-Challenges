# Hint: Controlled Form Elements

To make a form element controlled, add the `value` (or `checked` for checkboxes/radios) prop that references the state:

**Text inputs:**
```jsx
<input
  type="text"
  name="firstName"
  value={formData.firstName}
  onChange={handleChange}
/>
```

**Radio inputs:**
```jsx
<input
  type="radio"
  name="privacyResponse"
  value="yes"
  checked={formData.privacyResponse === "yes"}
  onChange={handleChange}
/>
```

**Select:**
```jsx
<select
  name="rating"
  value={formData.rating}
  onChange={handleChange}
>
  {/* options */}
</select>
```

**Checkbox:**
```jsx
<input
  type="checkbox"
  name="marketingResponse"
  checked={formData.marketingResponse}
  onChange={handleChange}
/>
```

The key is connecting each element's value/checked prop to its corresponding state property!

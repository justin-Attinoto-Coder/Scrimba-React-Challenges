The challenge is about reducing the number of props passed to components. Instead of passing multiple individual props, you can pass a single object containing all the data.

For example, instead of:
<NavButtons wordsDataArray={wordsDataArray} currentWord={currentWord} setCurrentWord={setCurrentWord} position="top" />

You can pass:
<NavButtons data={{wordsDataArray, currentWord, setCurrentWord, position: "top"}} />

Then in the component, destructure from props.data.

This makes the code more concise and easier to manage when you have many props.
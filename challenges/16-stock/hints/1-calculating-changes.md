## Hint 1: Destructuring Props

Start by destructuring the `stock` prop to access the individual properties like `stockName`, `logo`, `currentPrice`, and `prevClosingPrice`.

## Hint 2: Calculating Changes

Calculate the numerical change by subtracting `prevClosingPrice` from `currentPrice`. Then calculate the rate change as a percentage.

## Hint 3: Formatting Numbers

Use `.toFixed(2)` to format numbers to two decimal places for display.

## Hint 4: Conditional Styling

Use conditional logic to determine the `colorClass` and `arrow` based on whether the stock price has increased, decreased, or stayed the same.
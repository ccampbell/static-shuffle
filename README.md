# Static shuffle

Create a deterministic shuffle of an array given a seed

## Install

```
npm install static-shuffle
```

## Usage

```javascript
const shuffle = require('static-shuffle');
shuffle(['Apple', 'Banana', 'Blueberry', 'Orange', 'Strawberry', 'Watermelon'], 'anything you want!');

// result
// ['Blueberry', 'Watermelon', 'Orange', 'Strawberry', 'Apple', 'Banana']
```

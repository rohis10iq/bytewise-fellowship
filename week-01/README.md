# Bytewise Fellowship - React JS & Next JS

Welcome to my journey of learning React JS as part of the Bytewise fellowship. This repository documents my progress and what I've learned each day.

This is Week 01:

## Week 01:

## Day 1: HTML, CSS, JS Revised and Refreshed

On the first day, I revisited the basics of web development:
- **HTML**: The standard markup language for creating web pages. I revised the structure of an HTML document, elements, tags, attributes, and semantic HTML.
- **CSS**: Cascading Style Sheets used for describing the presentation of a document written in HTML. I refreshed my knowledge on selectors, properties, layouts (Flexbox, Grid), and responsive design.
- **JavaScript**: The programming language of the web. I revised variables, data types, functions, loops, conditionals, and the DOM manipulation.

## Day 2: Create a Static React App

On the second day, I learned how to set up a React application using the `create-react-app` command in VS Code.

### Steps to Create a React App
1. Install Node.js and npm if not already installed.
2. Open VS Code and open a new terminal.
3. Run the following command to create a new React application:

    ```bash
    npx create-react-app my-static-app
    ```

4. Navigate to the project directory:

    ```bash
    cd my-static-app
    ```

5. Start the development server:

    ```bash
    npm start
    ```

This command will start the React application, and it will be accessible at `http://localhost:3000`.

## Day 3: Introduction to JSX

On the third day, I was introduced to JSX, a syntax extension for JavaScript that looks similar to HTML.

### What is JSX?
- **JSX** stands for JavaScript XML.
- It allows us to write HTML in React in a way that is familiar to us.
- JSX makes the React code easier to read and write.

### JSX Example
```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello, world!</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);

```

# Day 4: React Components

On the fourth day, I learned about React components. Components are the building blocks of a React application.

## What are React Components?

- Components are independent and reusable bits of code.
- They serve the same purpose as JavaScript functions but work in isolation and return HTML via a render function.

## Types of Components

### 1. Functional Components

These are simple JavaScript functions that accept props as an argument and return React elements.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

```jsx

## 2. Class Components

These are ES6 classes that extend `React.Component` and have a `render` method.

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## Example of a Functional Component

```jsx

import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}
export default Greeting;

```

## Example of a Class Component
```jsx

import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Greeting;
```

# This was all I learned in my first week with Bytewise. 

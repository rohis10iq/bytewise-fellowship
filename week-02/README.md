## Week 02:

### Day 1: State and Lifecycle in React

#### State in React
- **State** is a built-in object that is used to contain data or information about the component.
- State can change over time and when it changes, the component re-renders.
- State is managed within the component.

```jsx
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;
```
#### Lifecycle Methods
- **Lifecycle** methods are special methods each component can have to run code at particular times in the process.
- Common lifecycle methods:
  - componentDidMount(): Invoked immediately after a component is mounted.
  - componentDidUpdate(): Invoked immediately after updating occurs.
  - componentWillUnmount(): Invoked immediately before a component is unmounted and destroyed.

```jsx

import React, { Component } from 'react';

class LifecycleComponent extends Component {
  componentDidMount() {
    console.log('Component did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return <div>Check the console for lifecycle logs</div>;
  }
}

export default LifecycleComponent;
```

### Day 2: Props in React Components
#### What are Props?
  - **Props** (short for properties) are read-only attributes used to pass data from parent to child components.
  - Props allow components to be dynamic and reusable.

```jsx
import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return <Greeting name="World" />;
}

export default App;
```

#### Passing Props
- Props are passed to components similar to HTML attributes.
- They can be of any data type (string, number, function, etc.).

```jsx
import React from 'react';

function Welcome(props) {
  return <h1>Welcome, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}

export default App;
```
### Day 3: React Hooks
#### Introduction to Hooks
- **Hooks** are functions that let you use state and other React features without writing a class.
- Major hooks include useState, useEffect, and useContext.
#### useState Hook
- The useState hook allows you to add state to functional components.

```jsx 
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;

```
#### useEffect Hook
- The **useEffect** hook lets you perform side effects in functional components.
- It is similar to lifecycle methods like **componentDidMount** and **componentDidUpdate**.

```jsx 
import React, { useEffect, useState } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div>Count: {count}</div>;
}

export default Timer;

```
#### useContext Hook
- The **useContext** hook allows you to use context to manage global state.
- Context provides a way to pass data through the component tree without having to pass props down manually at every level.

```jsx 
import React, { useContext, createContext } from 'react';

const MyContext = createContext();

function Display() {
  const value = useContext(MyContext);
  return <div>The value is: {value}</div>;
}

function App() {
  return (
    <MyContext.Provider value="Hello, World!">
      <Display />
    </MyContext.Provider>
  );
}

export default App;

```
### This was all I learned in my second week with Bytewise.
### To Practice hooks, I made two single-component react apps
 - **counterApp**
 - **notesApp**


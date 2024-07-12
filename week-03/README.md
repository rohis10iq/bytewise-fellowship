## Week 03:

### Day 1: Advanced useState Use Cases

#### Complex State Management with useState
- `useState` can handle complex state by using objects or arrays.

```jsx
import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    username: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <form>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
    </form>
  );
}

export default Form;
```
#### How to Avoid "useState Hell"
- "useState Hell" refers to managing too many states in a single component.
- Break down complex components into smaller ones and use context or state management libraries for global state.

### Day 2: Preventing Infinite Re-rendering Loop with useEffect
#### Basic Usage of useEffect
- `useEffect` is used to perform side effects in functional components.
- To prevent infinite loops, provide a dependency array as the second argument.

```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Clean up interval on unmount
    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures effect runs only once

  return <div>Count: {count}</div>;
}

export default Timer;
```

### Day 3: Styling in React
#### Inline Styling
- `Inline styles` are defined directly within the JSX using the style attribute.

```jsx
import React from 'react';

function App() {
  const headingStyle = {
    color: 'blue',
    fontSize: '24px',
    textAlign: 'center'
  };

  return <h1 style={headingStyle}>Welcome to My App</h1>;
}

export default App;
```
#### CSS-in-JS (Styled Components)
- CSS-in-JS libraries like styled-components allow writing actual CSS to style components.

```jsx
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.primary ? 'blue' : 'gray'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
`;

function App() {
  return (
    <div>
      <Button primary>Primary Button</Button>
      <Button>Secondary Button</Button>
    </div>
  );
}

export default App;
```
#### CSS Modules
- CSS Modules allow locally scoped CSS by importing CSS files directly into React components.

```jsx
import React from 'react';
import styles from './Button.module.css'; // Import CSS module

function Button() {
  return <button className={styles.button}>Click me</button>;
}

export default Button;
```
### Day 4: Conditional Rendering in React
#### Using Conditional (Ternary) Operator
```jsx
import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome, User!</p>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log In</button>
      )}
    </div>
  );
}

export default App;
```
### Day 5: Displaying Data with Loops, Handling Arrays and Objects
#### Rendering Lists with Arrays
```jsx
import React from 'react';

function App() {
  const names = ['Alice', 'Bob', 'Charlie'];

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}

export default App;
```
#### Rendering Lists with Objects
```jsx
import React from 'react';

function App() {
  const user = {
    name: 'Alice',
    age: 30,
    email: 'alice@example.com'
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default App;
```
#### This was all for Week 3 with Bytewise.
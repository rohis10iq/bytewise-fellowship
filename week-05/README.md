# Week 05:

### Day 1: Dynamic Routing in React

#### Dynamic Routing with useParams and React Outlet

##### useParams
- `useParams` is a hook that returns an object of key/value pairs of URL parameters.
- Useful for accessing dynamic segments of the URL.

```jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  let { userId } = useParams();
  return <div>User ID: {userId}</div>;
}

export default UserProfile;
```
#### React Outlet
- Outlet is used in nested routes to render the matched child route element.
```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

function Users() {
  return (
    <div>
      <h1>Users</h1>
      <Outlet />
    </div>
  );
}

export default App;
```
### Day 2: API Calls with Fetch and Axios
#### Fetch API
- The Fetch API provides an interface for fetching resources.
```jsx
import React, { useEffect, useState } from 'react';

function DataFetching() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default DataFetching;
```
#### Axios
- Axios is a promise-based HTTP client for the browser and Node.js.
```jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataFetching() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/data')
      .then(response => setData(response.data));
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default DataFetching;
```
### Day 3: UI Component Libraries in React
#### Chakra UI
- Chakra UI is a simple, modular, and accessible component library.
```jsx
import { ChakraProvider, Button } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Button colorScheme="blue">Chakra Button</Button>
    </ChakraProvider>
  );
}

export default App;
```
#### Material UI
- Material UI offers a comprehensive suite of UI components.
```jsx
import React from 'react';
import Button from '@mui/material/Button';

function App() {
  return <Button variant="contained" color="primary">Material UI Button</Button>;
}

export default App;
```

### Day 4: Animations with Framer Motion
#### Introduction to Framer Motion
- Framer Motion is a production-ready motion library for React.
```jsx
import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div
      animate={{ scale: 1.5 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Hello, Framer Motion!</h1>
    </motion.div>
  );
}

export default App;
```
#### Example Animation
- Creating a simple fade-in animation.
```jsx
import React from 'react';
import { motion } from 'framer-motion';

function FadeInExample(){
  return(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Fade In</h1>
    </motion.div>
  );
}

export default FadeInExample;
```

### Day 5: Other React Libraries, Pros and Cons, What They're Used For

#### 1. Redux
- **Use**: State management.
- **Pros**:
  - Centralized state management.
  - Predictable state updates.
  - Great developer tools and ecosystem.
- **Cons**:
  - Boilerplate-heavy.
  - Steeper learning curve compared to Context API.

#### 2. React Query
- **Use**: Data fetching and caching.
- **Pros**:
  - Simplifies data fetching logic.
  - Built-in caching, synchronization, and background updates.
  - Automatic refetching and polling.
- **Cons**:
  - Adds an additional layer of abstraction.
  - Might be overkill for simple data fetching needs.

#### 3. Recoil
- **Use**: State management.
- **Pros**:
  - Minimal boilerplate.
  - Fine-grained state management.
  - Built-in support for asynchronous state.
- **Cons**:
  - Still in experimental phase.
  - Smaller ecosystem compared to Redux.

#### 4. Formik
- **Use**: Form handling.
- **Pros**:
  - Simplifies form state management.
  - Easy to integrate with validation libraries like Yup.
  - Handles complex form structures well.
- **Cons**:
  - Can be verbose for simple forms.
  - Learning curve for advanced usage.

#### 5. React Hook Form
- **Use**: Form handling.
- **Pros**:
  - Minimal re-renders.
  - Easy to integrate with UI libraries.
  - Great performance.
- **Cons**:
  - Less intuitive for beginners.
  - Smaller community compared to Formik.

#### 6. Styled Components
- **Use**: CSS-in-JS styling.
- **Pros**:
  - Scoped styles.
  - Dynamic styling based on props.
  - Better organization of styles.
- **Cons**:
  - Potentially larger bundle size.
  - Debugging CSS can be challenging.

#### 7. Emotion
- **Use**: CSS-in-JS styling.
- **Pros**:
  - Highly performant.
  - Flexible styling options.
  - Great for theme-based applications.
- **Cons**:
  - Learning curve for advanced features.
  - Slightly complex setup.

#### 8. Framer Motion
- **Use**: Animations.
- **Pros**:
  - Easy to use.
  - Powerful animations with minimal code.
  - Declarative API.
- **Cons**:
  - Adds to bundle size.
  - Learning curve for complex animations.

#### 9. React Spring
- **Use**: Animations.
- **Pros**:
  - Physics-based animations.
  - Flexible and customizable.
  - Great performance.
- **Cons**:
  - Complex API for beginners.
  - Less documentation compared to Framer Motion.



#### This concludes what I learned in my 5th week with Bytewise.



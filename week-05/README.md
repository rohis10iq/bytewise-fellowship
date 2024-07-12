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
#### This concludes what I learned in my 5th week with Bytewise.



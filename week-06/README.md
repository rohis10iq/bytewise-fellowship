# Week 06:

### Day 1: Global State in React JS

#### What is `Global State`?

- Global state is a state that is shared across the entire application.
- It is a state that is not specific to a single component or a single page.
- It is a state that is accessible to all components in the application.

#### Why Use `Global State`?

- Shared Data:
    - Using global state ensures consistency and avoids the complexity of prop drilling (passing props through multiple levels of components).
- Centralized Management:
    - Global state allows for centralized management of the state, making it easier to understand and debug.
- Improved Performance:
    - Proper use of global state can improve performance by minimizing unnecessary re-renders and updates.

#### Managing Global State in React

1. React Context API
2. State Management Libraries
    - Redux
    - MobX
    - Zustand
    - React Query

#### 1. React Context API

- The React Context API is a built-in way to manage global state.
- It allows you to create a context, provide it at the top level of your application, and consume it in any component that needs access to the state.

#### Creating a Context:

```jsx
import React, { createContext, useState, useContext } from 'react';

//Create a Context
const GlobalStateContext = createContext();

//Create a Provider Component
const GlobalStateProvider = ({ children }) => {
  const [state, setState] = useState({ user: null, theme: 'light' });

  return (
    <GlobalStateContext.Provider value={{ state, setState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

//Custom Hook to use the Global State
const useGlobalState = () => useContext(GlobalStateContext);

export { GlobalStateProvider, useGlobalState };
```
#### Using the Context in a Component:

```jsx
import React from 'react';
import { useGlobalState } from './GlobalStateProvider';

const UserProfile = () => {
  const { state, setState } = useGlobalState();

  return (
    <div>
      <h1>User Profile</h1>
      {state.user ? (
        <p>Welcome, {state.user.name}</p>
      ) : (
        <p>No user logged in</p>
      )}
      <button onClick={() => setState({ ...state, user: { name: 'John Doe' } })}>
        Log In
      </button>
    </div>
  );
};

export default UserProfile;
```
#### Providing the Context in the Application:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStateProvider } from './GlobalStateProvider';
import App from './App';

ReactDOM.render(
  <GlobalStateProvider>
    <App />
  </GlobalStateProvider>,
  document.getElementById('root')
);
```

#### 2. State Management Libraries

- For larger applications with more complex state management needs, you might use a state management library such as Redux, MobX, Zustand, or Recoil.

#### Redux: 
- A popular library for managing global state. It uses a central store and actions to update the state.

#### MobX: 
- A library that uses observables to track state changes and automatically update the UI.

#### Zustand: 
- A small, fast state management library with hooks-based API.

#### Recoil: 
- A state management library from Facebook that provides a way to share state across components and derive state based on other state.

### Day 2: Global State Management with useContext() 

####


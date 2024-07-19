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

#### Introduction to useContext()

The `useContext` hook in React provides a way to access the context directly without having to wrap components with the `Context.Consumer` component. It's useful for managing global state and sharing data across components.

#### Setting Up Context

1. **Create a Context**: Use `React.createContext()` to create a context object.

    ```jsx
    import React, { createContext, useState } from 'react';

    const MyContext = createContext();
    ```

2. **Create a Context Provider**: This component will hold the global state and provide it to its children.

    ```jsx
    function MyProvider({ children }) {
      const [state, setState] = useState('Initial State');

      return (
        <MyContext.Provider value={{ state, setState }}>
          {children}
        </MyContext.Provider>
      );
    }

    export default MyProvider;
    ```

3. **Consume Context in Components**: Use `useContext` to access the context value in functional components.

    ```jsx
    import React, { useContext } from 'react';
    import MyContext from './MyContext'; // Import your context

    function MyComponent() {
      const { state, setState } = useContext(MyContext);

      return (
        <div>
          <p>Current State: {state}</p>
          <button onClick={() => setState('Updated State')}>Update State</button>
        </div>
      );
    }

    export default MyComponent;
    ```

#### Example Usage

1. **App Component**: Wrap your components with the `MyProvider` to provide context.

    ```jsx
    import React from 'react';
    import MyProvider from './MyProvider';
    import MyComponent from './MyComponent';

    function App() {
      return (
        <MyProvider>
          <MyComponent />
        </MyProvider>
      );
    }

    export default App;
    ```

2. **Component with Context**: Access and update the context value.

    ```jsx
    import React, { useContext } from 'react';
    import MyContext from './MyContext';

    function MyComponent() {
      const { state, setState } = useContext(MyContext);

      return (
        <div>
          <p>Current State: {state}</p>
          <button onClick={() => setState('Updated State')}>Update State</button>
        </div>
      );
    }

    export default MyComponent;
    ```

#### Pros and Cons

- **Pros**:
  - Simplifies passing data through the component tree.
  - Useful for global state management and sharing state between deeply nested components.
  - Reduces the need for prop drilling.

- **Cons**:
  - Not as performant for frequently changing state due to re-rendering.
  - May lead to overuse and complicated state management if not used properly.

### Day 3: State Management with Context API

#### Introduction to Context API

The Context API in React provides a way to pass data through the component tree without having to pass props down manually at every level. It's particularly useful for managing global state and sharing data between components.

#### Setting Up Context

1. **Create a Context**: Use `React.createContext()` to create a context object.

    ```jsx
    import React, { createContext, useState } from 'react';

    const MyContext = createContext();
    ```

2. **Create a Context Provider**: This component will hold the global state and provide it to its children.

    ```jsx
    function MyProvider({ children }) {
      const [state, setState] = useState('Initial State');

      return (
        <MyContext.Provider value={{ state, setState }}>
          {children}
        </MyContext.Provider>
      );
    }

    export default MyProvider;
    ```

3. **Consume Context in Components**: Use `useContext` to access the context value in functional components.

    ```jsx
    import React, { useContext } from 'react';
    import MyContext from './MyContext'; // Import your context

    function MyComponent() {
      const { state, setState } = useContext(MyContext);

      return (
        <div>
          <p>Current State: {state}</p>
          <button onClick={() => setState('Updated State')}>Update State</button>
        </div>
      );
    }

    export default MyComponent;
    ```

#### Example Usage

1. **App Component**: Wrap your components with the `MyProvider` to provide context.

    ```jsx
    import React from 'react';
    import MyProvider from './MyProvider';
    import MyComponent from './MyComponent';

    function App() {
      return (
        <MyProvider>
          <MyComponent />
        </MyProvider>
      );
    }

    export default App;
    ```

2. **Component with Context**: Access and update the context value.

    ```jsx
    import React, { useContext } from 'react';
    import MyContext from './MyContext';

    function MyComponent() {
      const { state, setState } = useContext(MyContext);

      return (
        <div>
          <p>Current State: {state}</p>
          <button onClick={() => setState('Updated State')}>Update State</button>
        </div>
      );
    }

    export default MyComponent;
    ```

#### Pros and Cons

- **Pros**:
  - Simplifies passing data through the component tree.
  - Useful for global state management and sharing state between deeply nested components.
  - Reduces the need for prop drilling.

- **Cons**:
  - Not as performant for frequently changing state due to re-rendering.
  - May lead to overuse and complicated state management if not used properly.

### Day 4: Third Party Options for Global State Management

#### 1. Redux
- **Description**: A popular state management library that uses a centralized store to manage the state of an application. It provides predictable state updates and a great developer experience with tools like Redux DevTools.

#### 2. MobX
- **Description**: A state management library that makes state management simple and scalable by using observables. It provides reactive state management with less boilerplate code compared to Redux.

#### 3. Recoil
- **Description**: A state management library developed by Facebook that allows for fine-grained control over state management. It integrates seamlessly with React and offers features like atom-based state management and selectors for derived state.

#### 4. Zustand
- **Description**: A small, fast, and scalable state management solution that uses hooks. It provides a minimalistic API and is known for its simplicity and ease of use.

#### 5. Jotai
- **Description**: A primitive and flexible state management library that uses atoms for state. It provides a simple and scalable way to manage state with minimal boilerplate.

#### 6. Effector
- **Description**: A reactive state management library that provides a way to manage complex state logic with ease. It focuses on simplicity, predictability, and performance.

### Day 5: Basic Introduction to Redux and Recoil

#### Redux

##### What is Redux?
Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments, and are easy to test. While it can be used with any JavaScript framework or library, it is most commonly used with React.

##### Key Concepts
- **Store**: The single source of truth for your application state.
- **Actions**: Plain JavaScript objects that describe changes in the state.
- **Reducers**: Functions that determine how the state is updated based on actions.

##### Basic Usage Example

1. **Install Redux and React-Redux**:
    ```bash
    npm install redux react-redux
    ```

2. **Create a Redux Store**:
    ```jsx
    import { createStore } from 'redux';

    const initialState = { count: 0 };

    function counterReducer(state = initialState, action) {
      switch (action.type) {
        case 'INCREMENT':
          return { count: state.count + 1 };
        case 'DECREMENT':
          return { count: state.count - 1 };
        default:
          return state;
      }
    }

    const store = createStore(counterReducer);
    ```

3. **Use Redux in React Components**:
    ```jsx
    import React from 'react';
    import { Provider, useDispatch, useSelector } from 'react-redux';
    import store from './store'; // your Redux store

    function Counter() {
      const count = useSelector((state) => state.count);
      const dispatch = useDispatch();

      return (
        <div>
          <p>{count}</p>
          <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
          <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        </div>
      );
    }

    function App() {
      return (
        <Provider store={store}>
          <Counter />
        </Provider>
      );
    }

    export default App;
    ```

#### Recoil

##### What is Recoil?
Recoil is a state management library for React applications developed by Facebook. It provides a way to manage both local and global state with minimal boilerplate, and integrates seamlessly with React's concurrent mode.

##### Key Concepts
- **Atoms**: Units of state that can be read from and written to from any component.
- **Selectors**: Functions that compute derived state based on atoms or other selectors.

##### Basic Usage Example

1. **Install Recoil**:
    ```bash
    npm install recoil
    ```

2. **Create Recoil Atoms and Selectors**:
    ```jsx
    import { atom, selector } from 'recoil';

    const countState = atom({
      key: 'countState', // unique ID
      default: 0, // default value
    });

    const doubleCountState = selector({
      key: 'doubleCountState', // unique ID
      get: ({ get }) => {
        const count = get(countState);
        return count * 2;
      },
    });
    ```

3. **Use Recoil in React Components**:
    ```jsx
    import React from 'react';
    import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
    import { countState, doubleCountState } from './state'; // your atoms and selectors

    function Counter() {
      const [count, setCount] = useRecoilState(countState);
      const doubleCount = useRecoilValue(doubleCountState);

      return (
        <div>
          <p>Count: {count}</p>
          <p>Double Count: {doubleCount}</p>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
        </div>
      );
    }

    function App() {
      return (
        <RecoilRoot>
          <Counter />
        </RecoilRoot>
      );
    }

    export default App;
    ```

#### This was all I learned in Week 06.
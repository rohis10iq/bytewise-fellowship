# Week 07:

### Day 01: When to Use Global and Local States?

- Understanding when to use global and local states is crucial for maintaining a well-organized React application.

#### Local State
- **Scope**: Limited to a single component.
- **Use Cases**:
  - Form inputs.
  - Component-specific toggles.
  - Temporary state that does not need to be shared.
- **Pros**:
  - Simpler and easier to manage.
  - Reduces complexity by limiting state scope.
- **Cons**:
  - Cannot be shared across components.

#### Global State
- **Scope**: Accessible across multiple components.
- **Use Cases**:
  - User authentication data.
  - Theme settings.
  - Application-wide notifications.
- **Pros**:
  - Centralized state management.
  - Easy to share state across components.
- **Cons**:
  - Can lead to more complex state management.
  - Potential for unnecessary re-renders if not managed properly.


### Day 02: React Error Boundaries

#### Introduction to Error Boundaries
- Error boundaries are a React feature that lets you handle JavaScript errors in components gracefully. 
- They catch errors in the rendering phase, lifecycle methods, and constructors of the entire tree below them.

#### Creating an Error Boundary
To create an error boundary, you need to create a class component that implements `componentDidCatch` and `getDerivedStateFromError` methods.

```jsx
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Error caught by ErrorBoundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;

```
#### Using an Error Boundary
- Wrap the components you want to monitor with the `ErrorBoundary` component.

```jsx
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import MyComponent from './MyComponent';

function App() {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}

export default App;
```
#### Key Points
- Error boundaries do not catch errors for:
  - Event handlers
  - Asynchronous code (e.g., setTimeout or requestAnimationFrame callbacks)
  - Server-side rendering
  - Errors thrown in the error boundary itself (rather than its children)
  - Use error boundaries to provide a better user experience by displaying fallback UI.

### Week 07:
#### Day 03: Component Lifecycle

#### Introduction to Component Lifecycle
In React, the component lifecycle refers to the sequence of methods that are invoked in a component from its creation through its update and eventual unmounting. Understanding these lifecycle methods is essential for managing side effects and optimizing performance.

#### Lifecycle Methods in Class Components

1. **Mounting**: Methods called when a component is being created and inserted into the DOM.

   - `constructor()`: Initializes state and binds methods.
   - `static getDerivedStateFromProps()`: Updates state based on props before rendering.
   - `render()`: Outputs the JSX of the component.
   - `componentDidMount()`: Invoked immediately after the component is mounted. Ideal for initiating network requests or setting up subscriptions.

2. **Updating**: Methods called when a component is being re-rendered as a result of changes to either its props or state.
   - `static getDerivedStateFromProps()`: (As above) Updates state based on props before rendering.
   - `shouldComponentUpdate()`: Determines if a component should re-render based on changes in props or state.
   - `render()`: (As above) Outputs the JSX of the component.
   - `componentDidUpdate(prevProps, prevState)`: Invoked immediately after updating occurs. Ideal for handling updates based on previous props or state.

3. **Unmounting**: Methods called when a component is being removed from the DOM.
   - `componentWillUnmount()`: Cleanup operations like invalidating timers or canceling network requests.

4. **Error Handling**: Methods called when an error occurs in a component's subtree.
   - `static getDerivedStateFromError()`: Updates state to render a fallback UI.
   - `componentDidCatch(error, errorInfo)`: Logs error information for debugging.

#### Example Usage

```jsx
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // Update state based on props
    return null;
  }

  componentDidMount() {
    // Fetch data after the component mounts
    fetch('/api/data')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Control re-rendering
    return nextState.data !== this.state.data;
  }

  componentDidUpdate(prevProps, prevState) {
    // Perform actions based on prop or state changes
  }

  componentWillUnmount() {
    // Cleanup actions
  }

  render() {
    return (
      <div>
        {this.state.data ? <p>{this.state.data}</p> : <p>Loading...</p>}
      </div>
    );
  }
}

export default MyComponent;
```

#### Key Points

- Lifecycle methods provide hooks to run code at specific points in a component's life.
- Functional components use hooks like useEffect to handle side effects instead of lifecycle methods.


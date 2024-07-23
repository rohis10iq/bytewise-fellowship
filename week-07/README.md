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



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

**Conclusion**: Use local state for component-specific data and global state for data that needs to be shared across multiple components.

This concludes what I learned about when to use global and local states on Day 1.


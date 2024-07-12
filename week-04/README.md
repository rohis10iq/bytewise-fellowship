## Week 04:

### Day 1: Understanding npm Projects

#### What are npm Projects?
- **npm** (Node Package Manager) is the default package manager for JavaScript runtime environment Node.js.
- npm projects are directories that contain a `package.json` file, which lists dependencies and scripts for managing the project.

#### Creating an npm Project
- Initialize a new npm project using `npm init`.
- Follow the prompts to create a `package.json` file.

```bash
npm init
```
### Day 2: Libraries and Frameworks
#### What are Libraries?
- **Libraries** are reusable collections of code that provide specific functionalities, such as UI components, data manipulation, etc.
- Examples include `jQuery`, `lodash`, `axios`.
#### What are Frameworks?
- **Frameworks** are comprehensive sets of tools and libraries that provide a structure and guidelines for building software applications.
- Examples include `React`, `Angular`, `Vue.js`.

### Day 3: Routing in React
#### Routing in React vs Vanilla HTML
- **Routing** in React allows for single-page applications (SPA) where navigation happens without a page refresh.
- **Vanilla HTML** requires loading new HTML pages from the server for navigation.

### Day 4: React Router Introduction
#### What is React Router?
- **React Router** is a library for declarative routing in React applications.
- It enables navigation and routing functionality without reloading the entire page.
#### Installation
- Install React Router using npm:
```bash
npm install react-router-dom
```
#### Basic Usage - Static Routing
```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
```

### Day 5: Static Routing in React
#### Static Routing with React Router
- **Static Routing** involves defining routes for specific paths in your application.
- Each route is mapped to a component that renders when the path matches.

#### Example of Static Routing
```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App(){
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
```
#### This was all for Week 4 with Bytewise.


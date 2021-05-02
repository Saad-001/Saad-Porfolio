import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import ResumeDetail from './Components/ResumeDetail/ResumeDetail';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/resume">
          <ResumeDetail></ResumeDetail>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
// import Axios from 'axios';
import Projects from './components/projects';

function App() {


  return (
    <Router> 
    <div className="App">
      <header className="App-header">
       <Link to ="/projects"> projects </Link>
       <Route path ="/projects">
         <Projects/>
       </Route>
      </header>
    </div>
    </Router>
  );
}

export default App;

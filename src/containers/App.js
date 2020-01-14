import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route component={Home} exact path='/'/>
        <Route component={Movies} exact path='/movies'/>
        <Route component={Directors} exact path='/directors' />
        <Route component={Actors} exact path='/actors'/>
      </div>
    </Router>
  );
};

export default App

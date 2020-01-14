import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
	    <Route path='/actors' component={Actors} />
	    <Route path='/directors' component={Directors} />
	    <Route path='/movies' component={Movies} />
	    <Route exact path='/' component={Home} />
      </div>
    </Router>
  );
};

export default App

/*

<Router>
  <div>
  	<NavBar />
  	<Switch>
      <Route path='/actors' component={Actors} />
      <Route path='/directors' component={Directors} />
      <Route path='/movies' component={Movies} />
      <Route exact path='/' component={Home} />
      <Route path='/' render={() => <img src="https://cdn.shopify.com/s/files/1/0322/6897/files/404-permalink.png?432866230176278629" alt="404" style={{width: '100%'}}/>} />
    </Switch>
  </div>
</Router>




*/
import React,{Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  return (
    <Fragment>
        <Router>
          <NavBar/>
          <Switch>
            <Route path='/' exact/>
          </Switch>
        </Router>
    </Fragment>
  );
}

export default App;

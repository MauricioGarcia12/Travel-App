import React,{Fragment} from 'react';
import NavBar from './components/NavBar'
import './App.css';
import Home from './components/pages/Home'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
function App() {
  return (
    <Fragment>
        <Router>
          <NavBar/>
          <Switch>
            
            <Route path='/' exact component={Home}/>
            <Route path='/services' component={Services}/>
            <Route path='/products' component={Products}/>
            <Route path='/sign-up' component={SignUp}/>

          </Switch>
        </Router>
    </Fragment>
  );
}

export default App;

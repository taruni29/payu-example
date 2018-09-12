/**
 * External dependencies
 */
import React, { Component } from 'react';
import {
   BrowserRouter as Router,
   Route,Switch
} from 'react-router-dom'

/**
 * Internal dependencies
 */
import Signup from './components/Signup';
import Signin from './components/Signin';
import Payui from './components/Payui';


class App extends Component {

  render() {

    return (
      <Router>
         <Switch>
           <Route exact path="/" component={Signin}/>
           <Route exact path="/signup" component={Signup}/>
           <Route exact path="/Payui" component={Payui}/>
         </Switch>
       </Router>

    );
  }
}

export default App;

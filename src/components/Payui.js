
/**
 * External dependencies
 */
import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';



class Payui extends Component {
  constructor(props){
    super(props);
  }


render() {

  return (
    <div>
    <form method="POST" action="http://localhost:1337/checkout">
  		<input type="text" name="amount"/>
  		<input type="submit" value="Submit"/>
  	</form>
    </div>
  )
}
}

export default Payui;

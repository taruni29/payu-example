
/**
 * External dependencies
 */
import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';


class Signin extends Component {

  constructor(props){
    super(props);
    this.state={
         storedata:[]
    }
}

// Sign in user


SignIn(){
        fetch('/api/auth/getuser',{
            method:'GET',
            headers: {
                'x-access-token':localStorage.getItem("tokenid"),
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then((response)=>{
               // alert(JSON.stringify(response));
                return response.json()
            })
            .then((data)=>{
                this.setState({
                    storedata:data
                   
                })
                console.log(data);
            })
            .catch((err)=>{
                this.setState({
                    err:err
                })
            })
        console.log(this.state.storedata)
    }
    


render() {

  return (
          <div className="simple">
            <div className="next">
              <div id="login-page" className="row">
                  <div className="col s12 z-depth-6 card-panel">
                      <form className="login-form">
                          <div className="row">
                              <div className="input-field col s12 center">
                                  <img width="200" height="200" src="http://stellentsoft.com/wp-content/uploads/2016/02/logo_1x.svg" alt className="responsive-img valign profile-image-login" />
                              </div>
                          </div>

                          {/* Input field "Email" */}
                          <div className="row margin">
                              <div className="input-field col s12">
                                  <i className="mdi-communication-email prefix" />
                                  <input id="email" type="email" className="validate" />
                                  <label htmlFor="email" className="center-align">Email</label>
                              </div>
                          </div>

                          {/* Input field "Password" */}
                          <div className="row margin">
                              <div className="input-field col s12">
                                  <i className="mdi-action-lock-outline prefix" />
                                  <input id="password" type="password" className="validate" />
                                  <label htmlFor="password">Password</label>
                              </div>
                          </div>

                          <div className="row">
                              <div className="input-field col s12">

                                  {/* Calling the Sign in function */}
                                  <a onClick={this.SignIn.bind(this)} className="btn waves-effect waves-light col s12">Login</a>
                              </div>
                              <div className="input-field col s12">
                                  <p className="margin center medium-small sign-up">Dont have an account? <a href="/signup">Register</a>
                                  </p>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
              <center>
                  <footer className="page-footer">
                      <div className="footer-copyright">
                          <div className="container">
                              © 2018 Stellentsoft
                              <a className="grey-text text-lighten-4 right"></a>
                          </div>
                      </div>
                  </footer>
              </center>
          </div>
        </div>
  );
}
}

export default Signin

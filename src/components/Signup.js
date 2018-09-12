
/**
 * External dependencies
 */
import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import { STATUS_CODES } from 'http';


class Signup extends Component {
  constructor(props){
    super(props);
  }

  Signup(){
      var name  = document.getElementById("name").value
      var email  = document.getElementById("email").value
      var password  = document.getElementById("password").value
       var formBody = [];
       formBody.push("name=" + encodeURIComponent(name));
       formBody.push("email=" + encodeURIComponent(email));
       formBody.push("password=" + encodeURIComponent(password));
       formBody = formBody.join("&");

       console.log(JSON.stringify(formBody)+"status")
       //do fetch call
       fetch('/api/auth/register',{
           method:'post',
           headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/x-www-form-urlencoded'
           },
           body: formBody
       })
           .then((response)=>response.json())
           .then((status)=>{
            localStorage.setItem("tokenid",status.token)
               console.log(JSON.stringify(status.token)+"status")

               if(status.auth===true){
                   alert("Registered")
                   window.location.href="/signin"
               }
               else
               {
                   alert("Failed to submit" + JSON.stringify(status))
               }
           })
           .catch((err)=>{
               alert("Error to submit: " + JSON.stringify(err))
           })
    }

render() {

  return (
      <div className="simple">
          <div className="next">
              <div className="col-md-6"></div>
              <div id="login-page" className="row">
                  <div className="col s12 z-depth-6 card-panel">
                      <form className="login-form">
                          <div className="row">
                              <div className="input-field col s12 center">
                                  <img src="http://stellentsoft.com/wp-content/uploads/2016/02/logo_1x.svg" alt className="responsive-img valign profile-image-login" />
                              </div>
                          </div>

                          {/*Input field "Name" */}
                          <div className="row margin">
                              <div className="input-field col s12">
                                  <i className="mdi-social-person-outline prefix" />
                                  <input id="name" type="text" className="validate" />
                                  <span id="error_name" className="text-danger"></span>
                                  <label htmlFor="username" className="center-align">Name</label>
                              </div>
                          </div>

                          {/*Input field "Email" */}
                          <div className="row margin">
                              <div className="input-field col s12">
                                  <i className="mdi-communication-email prefix" />
                                  <input id="email" type="email" className="validate" />
                                  <span id="error_email" className="text-danger"></span>
                                  <label htmlFor="email" className="center-align">Email</label>
                              </div>
                          </div>

                          {/*Input field "Password" */}
                          <div className="row margin">
                              <div className="input-field col s12">
                                  <i className="mdi-action-lock-outline prefix" />
                                  <input id="password" type="password" className="validate" />
                                  <span id="error_password" className="text-danger"></span>
                                  <label htmlFor="password">Password</label>
                              </div>
                          </div>

                          {/*Input field "Confirm Password" */}
                          <div className="row margin">
                              <div className="input-field col s12">
                                  <i className="mdi-action-lock-outline prefix" />
                                  <input id="cpassword" type="password" />
                                  <span id="error_cpassword" className="text-danger"></span>
                                  <label htmlFor="password-again">Re-type password</label>
                              </div>
                          </div>
                          <div className="row">
                              <div className="input-field col s12">

                            {/* Calling the Signup function */}
                                  <a onClick={this.Signup.bind(this)} id="submit" className="btn waves-effect waves-light col s12">Register Now</a>
                              </div>
                              <div className="input-field col s12">
                                  <p className="margin center medium-small sign-up">Already have an account? <a href="/signin">Login</a>
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

export default Signup

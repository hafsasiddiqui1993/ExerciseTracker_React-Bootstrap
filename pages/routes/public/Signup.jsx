import React, { useState } from "react";

import React from 'react'
function MemberSignin() {
    const [password, setPass] = useState("");
    const [email, setEmail] = useState("");
    const [passError, setPassError] = useState("");
    const [emailError, setEmailError] = useState("");
  
    const handleValidation = (event) => {
      let formIsValid = true;
  
      if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        formIsValid = false;
        setEmailError("Email Not Valid");
        return false;
      } else {
        setEmailError("");
        formIsValid = true;
      }
  
      if (!password.match(/^[a-zA-Z]{8,22}$/)) {
        formIsValid = false;
        setPassError(
          "Only Letters and length must best Max 8 Chracters"
        );
        return false;
      } else {
        setPassError("");
        formIsValid = true;
      }
  
      return formIsValid;
    };
  
    const loginSubmit = (e) => {
      e.preventDefault();
      handleValidation();
    };
  
    return (
      <div className="App">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4">
              <form id="loginform" onSubmit={loginSubmit}>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="EmailInput"
                    name="EmailInput"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <small id="emailHelp" className="text-danger form-text">
                    {emailError}
                  </small>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={(event) => setPass(event.target.value)}
                  />
                  <small id="passerror" className="text-danger form-text">
                    {passError}
                  </small>
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default MemberSignin;
  
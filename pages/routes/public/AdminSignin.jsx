import React from 'react'

import { useState } from 'react';
function AdminSignin() {
  const [a_pass, seta_pass] = useState("");
  const [a_email, seta_email] = useState("");
  const [a_passError, seta_passError] = useState("");
  const [a_emailError, seta_emailError] = useState("");

  const handleValidation = (event) => {
    let formIsValid = true;

    if (!a_email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      seta_emailError("Email Not Valid");
      return false;
    } else {
      seta_emailError("");
      formIsValid = true;
    }

    if (!a_pass.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      seta_passError(
        "Only Letters and length must best Max 8 Chracters"
      );
      return false;
    } else {
      seta_passError("");
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
                  onChange={(event) => seta_email(event.target.value)}
                />
                <small id="a_emailError" className="text-danger form-text">
                  {a_emailError}
                </small>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(event) => seta_pass(event.target.value)}
                />
                <small id="a_passError" className="text-danger form-text">
                  {a_passError}
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

export default AdminSignin
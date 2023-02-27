import React, { useState } from "react";


function MemberSignin() {
    const [m_pass, setm_pass] = useState("");
    const [m_email, setm_email] = useState("");
    const [m_passError, setm_passError] = useState("");
    const [m_emailError, setm_emailError] = useState("");
  
    const handleValidation = (event) => {
      let formIsValid = true;
  
      if (!m_email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        formIsValid = false;
        m_emailError("Email Not Valid");
        return false;
      } else {
        m_emailError("");
        formIsValid = true;
      }
  
      if (!m_pass.match(/^[a-zA-Z]{8,22}$/)) {
        formIsValid = false;
        setm_passError(
          "Only Letters and length must best Max 8 Chracters"
        );
        return false;
      } else {
        setm_passError("");
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
                    onChange={(event) => setm_email(event.target.value)}
                  />
                  <small id="m_emailError" className="text-danger form-text">
                    {m_emailError}
                  </small>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={(event) => setm_pass(event.target.value)}
                  />
                  <small id="m_passError" className="text-danger form-text">
                    {m_passError}
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
  
import React from 'react'

import { useState } from 'react'



function Signup() {

  const [m_fullname, setm_fullname] = useState("");
  const [m_dob, setm_dob] = useState("");
  const [m_add, setm_add] = useState("");
  const [m_ph, setm_ph] = useState("");
  const [m_nic, setm_nic] = useState("");
  const [m_email, setm_email] = useState("");
  const [m_pass, setm_pass] = useState("");

  const HandleInputChange = (e) => {
    const {id, value} = e.target;
    if(id === "m_fullname"){
      setm_fullname(value);
    }
    if(id === "m_dob") {
      setm_dob(value);
    }
    if(id === "m_add"){
      setm_add(value);
    }
    if(id === "m_ph") {
      setm_ph(value);
    }
    if(id === "m_nic"){
      setm_nic(value);
    }
    if(id === "m_email"){
      setm_email(value);
    }
    if(id === "m_pass"){
      setm_pass(value);
    }

  }

const HandleSubmit = () => {
  console.log(FullName,Dob,Add,Ph,NIC,Email,Pass);
}

  return (
    <div className="App">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4">
              <form onChange = {(e) => HandleInputChange(e)}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="FullName"
                    name="FullNameInput"
                    value={m_fullname}
                    placeholder="Enter Full Name" required
                    onChange={(event) => setm_fullname(event.target.value)}
                  />
                

                <label>Date Of Birth</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Dob"
                    name="DateOfBirthInput"
                    value={m_dob}
                    placeholder="Enter Date Of Birth" required
                    onChange={(event) => setm_dob(event.target.value)}
                  />
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Address"
                    name="AddressInput"
                    value={m_add}
                    placeholder="Enter Address" required
                    onChange={(event) => setm_add(event.target.value)}
                  />

                  <label>Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="number"
                    name="PhoneInput"
                    value={m_ph}
                    placeholder="Enter Address" required
                    onChange={(event) => setm_ph(event.target.value)}
                  />
                  
                  <label>CNIC</label>
                  <input
                    type="text"
                    className="form-control"
                    id="NIC"
                    name="NICInput"
                    value={m_nic}
                    placeholder="Enter CNIC" required
                    onChange={(event) => setm_nic(event.target.value)}
                  />

                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    name="EmailInput"
                    value={m_email}
                    placeholder="Enter Email" required
                    onChange={(event) => setm_email(event.target.value)}
                  />
                  

                  <label>Password</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Password"
                    name="PasswordInput"
                    value={m_pass}
                    placeholder="Enter Password" required
                    onChange={(event) => setm_pass(event.target.value)}
                  />

                </div>
                
                <button onClick={()=>HandleSubmit()} type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Signup
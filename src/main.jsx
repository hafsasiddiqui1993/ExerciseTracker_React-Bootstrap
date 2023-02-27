import React from 'react'
import ReactDOM from "react-dom/client";
import App from './App'
import './index.css'
// import ReactDOM from 'react-dom';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import MemberSignin from '../pages/routes/public/MemberSignin'
import Signup from '../pages/routes/public/Signup';
import AdminSignin from '../pages/routes/public/AdminSignin';
import ActivityForm from '../pages/routes/private/ActivityForm';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter> 
    <Routes> 
      
      <Route path="/" element={<App />}></Route>
      <Route path="/MemberSignin" element={<MemberSignin />}></Route>
      <Route path="/HomePage" element={<HomePage />}></Route>
      <Route path="/Signup" element={<Signup />}></Route>
      <Route path="/AdminSignin" element={<AdminSignin />}></Route>
      <Route path="/ActivityForm" element={<ActivityForm />}></Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
); 
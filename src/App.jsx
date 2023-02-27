// import './App.css'
import '../src/assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';


// import {
//   BrowserRouter,
//   Route,

// } from "react-router-dom"
import { Routes, Route } from "react-router-dom"


import HomePage from '../pages/HomePage';
import MemberSignin from '../pages/routes/public/MemberSignin';
import Signup from '../pages/routes/public/Signup';
import AdminSignin from '../pages/routes/public/AdminSignin';
import ActivityForm from '../pages/routes/private/ActivityForm';


function App() {
  
  return (
               <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="MemberSignin" element={<MemberSignin />} />
              <Route path="Signup" element={<Signup />} />
              <Route path="/AdminSignin" element={<AdminSignin />}></Route>

              <Route path="/ActivityForm" element={<ActivityForm />}></Route>

</Routes>


   
    
    

  )
}

export default App

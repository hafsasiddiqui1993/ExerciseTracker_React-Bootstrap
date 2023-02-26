// import './App.css'
import '../src/assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';


// import {
//   BrowserRouter,
//   Route,

// } from "react-router-dom"
import { BrowserRouter as  Routes, Route, Link, BrowserRouter } from 'react-router-dom'


import HomePage from '../pages/HomePage';
import MemberSignin from '../pages/routes/public/MemberSignin';
function App() {
  
  return (
<BrowserRouter>
<Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/sign-in" element={<MemberSignin />} />
            </Routes>


</BrowserRouter>
   
    
    

  )
}

export default App

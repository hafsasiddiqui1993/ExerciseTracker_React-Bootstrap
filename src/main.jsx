import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import MemberSignin from '../pages/routes/public/MemberSignin'
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MemberSignin />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <MemberSignin /> */}
    <HomePage />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>


  
);

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import Error from './Error.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Profile from './Profile.jsx';
import Register from './Register.jsx';
import Packages from './Packages.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/packages',
        element: <Packages></Packages>
      },
      {
        path: '/profile',
        element: <Profile></Profile>,
        loader: () => fetch('http://localhost:5000/register_users')
      
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="max-w-screen-xl mx-auto ">
    <RouterProvider router={router} />
    </div>
  </StrictMode>,
)

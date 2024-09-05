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
        path: '/login',
        element: <Login></Login>
      },
    ]
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="max-w-screen-xl mx-auto p-5 border-4">
    <RouterProvider router={router} />
    </div>
  </StrictMode>,
)

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'react-toastify/dist/ReactToastify.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.jsx";
import Error from "./Error.jsx";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Profile from "./Profile.jsx";
import Register from "./Register.jsx";
import Packages from "./Packages.jsx";
import Contact from "./Contact.jsx";
import Testimonial from "./Testimonial.jsx";
import PackageDetails from "./PackageDetails.jsx";
import PackageUpdate from "./PackageUpdate.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import PrivateRout from "./PrivateRout.jsx";
import My_Card from "./My_Card.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/packages",
        element: <Packages></Packages>,
      },
      {
        path: "/package_details/:p_id",
        element: <PackageDetails></PackageDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/package_details/${params.p_id}`),
      },
      {
        path: "/update_package/:id",
        element: <PackageUpdate></PackageUpdate>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/update_package/${params.id}`),
      },
      {
        path: "/testimonial",
        element: <Testimonial></Testimonial>,
      },
      {
        path: "/my_card",
        element: <My_Card></My_Card>,
      },
      {
        path: "/profile",
        element: <PrivateRout><Profile></Profile></PrivateRout>,
        loader: () => fetch("http://localhost:5000/register_users"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <div className="max-w-screen-xl mx-auto ">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </StrictMode>
);

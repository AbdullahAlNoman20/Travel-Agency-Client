import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Nav = () => {
  const { person, logOut } = useContext(AuthContext);

  // Sign Out
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        toast.warn("Logout Successfully");
        // alert("LogOut Successfully");
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navOptions = (
    <>
      <NavLink to="/">
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink to="packages">
        <li>
          <a>Packages</a>
        </li>
      </NavLink>
      <NavLink to="testimonial">
        <li>
          <a>Testimonial</a>
        </li>
      </NavLink>

      {person && (
        <>
          <NavLink to="/profile">
            <li>
              <a>Profile</a>
            </li>
          </NavLink>
        </>
      )}

      <NavLink to="/contact">
        <li>
          <a>Contact</a>
        </li>
      </NavLink>

      {person && (
        <>
          <NavLink to="/My_Card">
            <li>
              <a>My Card</a>
            </li>
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="bg-gray-50">
      <ToastContainer />
      <section>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navOptions}
              </ul>
            </div>
            <a className="text-3xl font-extrabold text-green-600">
            GlobeTrek{" "}
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOptions}</ul>
          </div>
          <div className="navbar-end border rounded-2xl p-2">
            {person ? (
              <div className="flex items-center">
                <h1 className="mr-3">{person.email}</h1>
                <NavLink to="/login">
                  <button
                    onClick={handleSignOut}
                    className="btn btn-outline btn-success"
                  >
                    LogOut
                  </button>
                </NavLink>
              </div>
            ) : (
              <NavLink to="/login">
                <a className="btn btn-outline btn-warning">Login</a>
              </NavLink>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nav;

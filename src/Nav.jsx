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
          <a><i className="fa fa-home" aria-hidden="true"></i> Home</a>
        </li>
      </NavLink>
      <NavLink to="packages">
        <li>
          <a><i className="fa fa-map" aria-hidden="true"></i> Packages</a>
        </li>
      </NavLink>
      <NavLink to="testimonial">
        <li>
          <a><i className="fas fa-user-check    "></i> About Us</a>
        </li>
      </NavLink>

      {person && (
        <>
          <NavLink to="/profile">
            <li>
              <a><i className="fa fa-user-circle" aria-hidden="true"></i> Profile</a>
            </li>
          </NavLink>
        </>
      )}

      {person && (
        <>
          <NavLink to="/My_Card">
            <li>
              <a><i className="fa fa-shopping-bag" aria-hidden="true"></i> My Card</a>
            </li>
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="bg-green-100">
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
            <a className="myFont lg:text-3xl font-extrabold text-green-600">
            <i className="fa fa-rocket" aria-hidden="true"></i> GlobeTrek
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOptions}</ul>
          </div>
          <div className="navbar-end rounded-2xl p-2">
            {person ? (
              <div className="flex items-center">
                <h1 className="mr-3 font-bold hidden lg:flex">{person.displayName || person.name }</h1>
                <NavLink to="/login">
                  <button
                    onClick={handleSignOut}
                    className="btn btn-outline btn-success"
                  >
                    <i className="fa fa-arrow-circle-right" aria-hidden="true"></i> LogOut
                  </button>
                </NavLink>
              </div>
            ) : (
              <NavLink to="/login">
                <a className="btn btn-outline btn-success"><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> Login</a>
              </NavLink>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nav;

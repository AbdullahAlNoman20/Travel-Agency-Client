import { NavLink } from "react-router-dom";

const Nav = () => {
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

      <NavLink to="/profile">
        <li>
          <a>Profile</a>
        </li>
      </NavLink>
      <NavLink to="/contact">
        <li>
          <a>Contact</a>
        </li>
      </NavLink>
    </>
  );

  return (
    <div className="bg-gray-50 border-b-2">
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
            <a className="text-2xl font-extrabold text-green-600">
              Mount Ride{" "}
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOptions}</ul>
          </div>
          <div className="navbar-end">
            <NavLink to="/login">
              <a className="btn btn-success btn-outline rounded-3xl border-0 border-b-8 font-bold ">
                Login
              </a>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nav;

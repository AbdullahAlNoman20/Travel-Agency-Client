
import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";


const Profile = () => {


  return (
    <div>
      <Helmet>
        <title>GlobeTrek: Profile</title>
      </Helmet>

      <div className="flex">
        {/* SideBar Left */}
        <div className="w-1/5 bg-green-100 border-r px-8 py-12 flex flex-col justify-between gap-2 min-h-screen">
          <div className="">
            <ul className="flex flex-col gap-4">
              <li className="btn ">
                <NavLink to="/profile">
                  <i className="fa fa-user-circle" aria-hidden="true"></i>{" "}
                  Profile
                </NavLink>
              </li>

              <li className="btn">
                <NavLink to="/profile/myPackage">
                  <i className="fa fa-list" aria-hidden="true"></i> My Package
                </NavLink>
              </li>

              <li className="btn">
                <NavLink to="/profile/addPackage">
                  <i className="fa fa-plus" aria-hidden="true"></i> Add Package
                </NavLink>
              </li>
              <li className="btn">
                <NavLink to="/profile/allUser">
                 <i className="fa fa-address-book" aria-hidden="true"></i> All User
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="">
            <button className="btn btn-outline">
              <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>{" "}
              Logout
            </button>
          </div>
        </div>
        {/* Sidebar Right */}
        <div className="w-4/5 p-10 border-t border-l border-green-500">
          <Outlet></Outlet>
        </div>
      </div>

    </div>
  );
};

export default Profile;

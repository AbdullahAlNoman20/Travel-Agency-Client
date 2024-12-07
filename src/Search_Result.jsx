import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const Search_Result = ({ results }) => {
  return (
    <div>
      <div className="flex justify-center p-5 ">
        {results.length > 0 ? (
          <ul>
            {results.map((packageItem) => (
              <li key={packageItem.id} className=" p-4 mb-4">
                <h3 className="font-extrabold text-2xl">{packageItem.name}</h3>
                <p>
                  <strong>Category:</strong> {packageItem.category}
                </p>
                <p>
                  <strong>Season:</strong> {packageItem.season}
                </p>
                <p>
                  <strong>Duration:</strong> {packageItem.duration} Days
                </p> 
                <p>
                  <strong>Cost:</strong> {packageItem.cost} $
                </p>
                <NavLink to="/packages">
                <button className="btn btn-success btn-wide text-white mt-5">Book Now</button>
                </NavLink>
                  
              </li>
            ))}
          </ul>
        ) : (
          // <p>You did not search anything. [OR] No packages found for the selected criteria.</p>
          <div className=""></div>
        )}
      </div>
    </div>
  );
};

export default Search_Result;

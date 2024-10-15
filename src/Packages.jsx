import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/package")
      .then((response) => response.json())
      .then((packages) => setPackages(packages))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle delete
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/delete_package/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log(`Successfully deleted entry with ID: ${id}`);
        setPackages(packages.filter((spot) => spot.id !== id));
        alert("Deleted Successfully");
      } else {
        console.error("Error deleting entry");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Packages</title>
      </Helmet>

      <div className="flex justify-center items-center p-4">
        <div className="">
          <p>Now {packages.length} Package Can Available for Travel </p>
        </div>
      </div>

      {/* Mapping the Package */}
      <div className="grid grid-cols-3 gap-12">
        {packages.map((spot) => (
          <div key={spot.id}>
            <div className="">
              <div className="p-5 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img
                  src="https://i.ibb.co.com/dmYWQZx/5.jpg"
                  alt=""
                  className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">
                      {spot.placeName}
                    </h2>
                    <p className="dark:text-gray-800">{spot.description}</p>
                  </div>
                  <NavLink to={`/package_details/${spot.id}`}>
                    <button
                      type="button"
                      className="btn btn-outline flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-900 dark:text-gray-50"
                    >
                      View Details
                    </button>
                  </NavLink>
                  <button
                    onClick={() => handleDelete(spot.id)}
                    type="button"
                    className="btn btn-warning flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-red-600 dark:text-gray-50"
                  >
                    Delete
                  </button>
                  <NavLink to={`/update_package/${spot.id}`}>
                    <button
                      type="button"
                      className="btn btn-outline flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-green-600 dark:text-gray-50"
                    >
                      Update
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
      const response = await fetch(`http://localhost:5000/package/${id}`, {
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
      <h1>Total Package: {packages.length}</h1>

      {/* Mapping the Package */}
      <div className="grid grid-cols-2">
        {packages.map((spot) => (
          <div key={spot.id}>
            <div className=" py-5 grid grid-cols-3 gap-2">
              <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img
                  src="https://source.unsplash.com/random/300x300/?2"
                  alt=""
                  className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
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
                      className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-900 dark:text-gray-50"
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
                      className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-green-600 dark:text-gray-50"
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

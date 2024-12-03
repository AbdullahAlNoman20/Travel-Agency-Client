import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const GuidInfo = () => {



    const guid = useLoaderData();

  const [guid_info, setGuid_info] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tour_guide_info")
      .then((response) => response.json())
      .then((guid_info) => setGuid_info(guid_info))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle delete
  const handleDelete = (g_id) => {
    const proceed = confirm("Are You Sure to DELETE this Guid ???");

    if (proceed) {
      fetch(`http://localhost:5000/tour_guide_info/${g_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Deleted Successfully");
            const remaining = guid_info.filter((Guid) => Guid.g_id !== g_id);
            setGuid_info(remaining);
          }
        });
    }
  };

    return (
        <div>
           <div className="">
        <div className="container flex flex-col p-2 mx-auto sm:p-4 dark:text-gray-800">
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-semibold">
              You Have {guid.length} Registered Guid Now.
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full p-6 text-xs text-left whitespace-nowrap">
              <colgroup>
                <col className="" />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col className="" />
              </colgroup>
              <thead>
                <tr className="dark:bg-gray-300">
                  <th className="p-3">Name</th>
                  <th className="p-3">Guid ID</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>

              {/* Single Row */}

              {guid.map((guid_info) => (
                <tbody
                  key={guid_info.g_id}
                  className="border-b dark:bg-gray-50 dark:border-gray-300"
                >
                  <tr>
                    <td className="px-3 py-2">
                      <p>{guid_info.name}</p>
                    </td>
                    <td className="px-3 py-2">
                      <p>{guid_info.g_id}</p>
                    </td>
                    <td className="px-3 py-2">
                      <p>{guid_info.email}</p>
                    </td>
                    <td className="px-3 py-2">
                      <button
                        onClick={() => handleDelete(guid_info.g_id)}
                        className="btn mr-2 btn-outline btn-warning"
                      >
                        Delete
                      </button>
                      {/* <button className="btn btn-outline btn-success">
                        Update
                      </button> */}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
        </div>
    );
};

export default GuidInfo;
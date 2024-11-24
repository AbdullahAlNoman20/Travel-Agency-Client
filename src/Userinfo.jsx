import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const Userinfo = () => {

    const user = useLoaderData();

  const [user_info, setUser_info] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user_info")
      .then((response) => response.json())
      .then((user_info) => setUser_info(user_info))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle delete
  const handleDelete = (id) => {
    const proceed = confirm("Are You Sure to DELETE this User ???");

    if (proceed) {
      fetch(`http://localhost:5000/user_info/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Deleted Successfully");
            const remaining = user_info.filter((user) => user.id !== id);
            setUser_info(remaining);
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
              All user {user.length}
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full p-6 text-xs text-left whitespace-nowrap">
              <colgroup>
                <col className="w-5" />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col className="w-5" />
              </colgroup>
              <thead>
                <tr className="dark:bg-gray-300">
                  <th className="p-3">Name</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>

              {/* Single Row */}

              {user.map((user) => (
                <tbody
                  key={user.id}
                  className="border-b dark:bg-gray-50 dark:border-gray-300"
                >
                  <tr>
                    <td className="px-3 py-2">
                      <p>{user.username}</p>
                    </td>
                    <td className="px-3 py-2">
                      <p>{user.number}</p>
                    </td>
                    <td className="px-3 py-2">
                      <p>{user.email}</p>
                    </td>
                    <td className="px-3 py-2">
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="btn mr-2 btn-outline btn-warning"
                      >
                        Delete
                      </button>
                      <button className="btn btn-outline btn-success">
                        Update
                      </button>
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

export default Userinfo;
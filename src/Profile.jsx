import { useLoaderData } from "react-router-dom";

const Profile = () => {
  // Event Handler
  const handleAddSpot = (event) => {
    event.preventDefault();
    const form = event.target;
    const placeName = form.placeName.value;
    const description = form.description.value;

    const newPackage = { placeName, description };
    console.log(newPackage);

    fetch('http://localhost:5000/package', {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPackage),
    })
      .then((req) => req.json())
      .then((data) => {
        if(data.insertedID){
          alert('Package Added Successfully')
          form.reset();
        }
        
        console.log(data);
        
      });
  };

  const users = useLoaderData();

  return (
    <div>
      {/* Create Package */}
      <div className="flex flex-row justify-around items-center py-6 ">
        {/* Left */}
        <div className="">
          <section>
            {/* The button to open modal */}
            <label
              htmlFor="my_modal_6"
              className="btn btn-wide btn-success btn-outline border-0 border-b-8 rounded-full font-extrabold"
            >
              Create Package
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box">
                <h3 className="text-lg font-bold">
                  Attention: You are creating a Package for Tour
                </h3>

                {/* Form in here */}
                <div className="">

                  {/* Form  */}
                  <section className="p-6">
                    <form
                      onSubmit={handleAddSpot}
                      noValidate=""
                      action=""
                      className="container flex flex-col mx-auto space-y-12"
                    >
                      <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                          <div className="col-span-full sm:col-span-3">
                            <label htmlFor="placeName" className="text-sm">
                              Place Name
                            </label>
                            <input
                              name="placeName"
                              type="text"
                              placeholder="Place Name"
                              className="w-full rounded-md p-2 border"
                            />
                          </div>
                          <div className="col-span-full sm:col-span-3">
                            <label htmlFor="Description" className="text-sm">
                              Description
                            </label>
                            <textarea
                              name="description"
                              className="textarea textarea-bordered"
                              placeholder="Description"
                            ></textarea>
                          </div>
                        </div>
                      </fieldset>
                      <button
                        type="submit"
                        className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-green-600 dark:text-gray-50"
                      >
                        Create
                      </button>
                    </form>
                  </section>
                </div>

                <div className="modal-action">
                  <label htmlFor="my_modal_6" className="btn">
                    Close!
                  </label>
                </div>
              </div>
            </div>
          </section>
        </div>
       
      </div>

      {/* All User List */}
      <div className="">
        <div className="container flex flex-col p-2 mx-auto sm:p-4 dark:text-gray-800">
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-semibold">
              All Users {users.length}
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
                </tr>
              </thead>

              {/* Single Row */}

              {/* Mapping Like This: 
{
  users.map(user => <p key={users.id} user={user} >Hello</p>)
} 
*/}

              {users.map((user) => (
                <tbody key={users.id} user={user} className="border-b dark:bg-gray-50 dark:border-gray-300">
                <tr>
                  <td className="px-3 py-2">
                    <p>{user.userName}</p>
                  </td>
                  <td className="px-3 py-2">
                    <p>555-873-9812</p>
                  </td>
                  <td className="px-3 py-2">
                    <p>dwight@adams.com</p>
                  </td>
                  <td className="px-3 py-2">
                    <button className="btn">Delete</button>
                    <button className="btn">Update</button>
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

export default Profile;

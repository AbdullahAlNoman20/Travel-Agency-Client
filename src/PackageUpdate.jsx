import { useLoaderData } from "react-router-dom";

const PackageUpdate = () => {

  const place = useLoaderData();

  // Event Handler
  const handleUpdateSpot = (event) => {
    event.preventDefault();
    const form = event.target;
    const placeName = form.placeName.value;
    const description = form.description.value;

    const UpdatedPackage = { placeName, description };
    console.log(UpdatedPackage);

    fetch(`http://localhost:5000/updated_package/${place.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdatedPackage),
    })
      .then((req) => req.json())
      .then((data) => {
        console.log(data);
        
      });
        alert('Package Update Successfully')
        
  };



  return (
    <div>
      Package Delete Page For {place.placeName}
      <div className="border p-5 m-5">
        <form
            onSubmit={handleUpdateSpot}
          noValidate=""
          action=""
          className="container flex flex-row mx-auto space-y-12"
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
                  defaultValue={place.placeName}
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
                  defaultValue={place.description}
                ></textarea>
              </div>
            </div>
          </fieldset>
          <button
            type="submit"
            className="btn btn-success flex items-center justify-center p-3 font-semibold tracking-wide rounded-md dark:bg-green-600 dark:text-gray-50"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default PackageUpdate;

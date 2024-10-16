import { useLoaderData } from "react-router-dom";

const PackageUpdate = () => {
  const place = useLoaderData();

  // Event Handler
  const handleUpdateSpot = (event) => {
    event.preventDefault();
    const form = event.target;
    const placeName = form.placeName.value;
    const description = form.description.value;
    const destination = form.destination.value;
    const type = form.type.value;
    const Class = form.Class.value;

    const UpdatedPackage = { placeName, description, destination, type, Class };
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
    alert("Package Update Successfully");
  };

  return (
    <div>
      <h1 className="font-extrabold text-xl text-center p-5">
        Package Updating Page For {place.placeName}
      </h1>
      <div className="border rounded-3xl p-5 m-5">
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
                <label htmlFor="placeName" className="text-sm">
                  Destination
                </label>
                <input
                  name="destination"
                  type="text"
                  placeholder="Destination"
                  defaultValue={place.destination}
                  className="w-full rounded-md p-2 border"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="placeName" className="text-sm">
                  Type
                </label>
                <input
                  name="type"
                  type="text"
                  placeholder="Type"
                  defaultValue={place.type}
                  className="w-full rounded-md p-2 border"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="placeName" className="text-sm">
                  Class
                </label>
                <input
                  name="Class"
                  type="text"
                  placeholder="Class"
                  defaultValue={place.Class}
                  className="w-full rounded-md p-2 border"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="Description" className="text-sm">
                  Description
                </label>
                <textarea
                  name="description"
                  className="textarea textarea-bordered w-full rounded-md p-2"
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

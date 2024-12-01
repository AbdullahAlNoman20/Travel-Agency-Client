import { useLoaderData } from "react-router-dom";

const PackageUpdate = () => {
  const place = useLoaderData();

  // Event Handler
  const handleUpdateSpot = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const description = form.description.value;
    const a_id = form.a_id.value;
    const g_id = form.g_id.value;
    const category = form.category.value;
    const season = form.season.value;
    const duration = form.duration.value;
    const cost = form.cost.value;
    const location = form.location.value;
    const emergency = form.emergency.value;
    const photo = form.photo.value;

    const UpdatedPackage = { name,a_id,g_id,category,season,duration,cost,location,emergency,photo,description};
    console.log(UpdatedPackage);

    fetch(`http://localhost:5000/updated_package/${place.p_id}`, {
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
        Package Updating Page For {place.name}
      </h1>
      <div className="border rounded-3xl p-5 m-5">
        <form
          onSubmit={handleUpdateSpot}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="placeName" className="text-sm">
                  Place Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Place Name"
                  defaultValue={place.name}
                  className="w-full rounded-md p-2 border"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="placeName" className="text-sm">
                  Category
                </label>
                <input
                  name="category"
                  type="text"
                  placeholder="Place Name"
                  defaultValue={place.category}
                  className="w-full rounded-md p-2 border"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="placeName" className="text-sm">
                  Guid ID
                </label>
                <input
                  name="g_id"
                  type="text"
                  placeholder="Place Name"
                  defaultValue={place.g_id}
                  className="w-full rounded-md p-2 border"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="placeName" className="text-sm">
                  Admin ID
                </label>
                <input
                  name="a_id"
                  type="text"
                  placeholder="Place Name"
                  defaultValue={place.a_id}
                  className="w-full rounded-md p-2 border"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="placeName" className="text-sm">
                  Season
                </label>
                <input
                  name="season"
                  type="text"
                  placeholder="Place Name"
                  defaultValue={place.season}
                  className="w-full rounded-md p-2 border"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="placeName" className="text-sm">
                  Duration
                </label>
                <input
                  name="duration"
                  type="text"
                  placeholder="Place Name"
                  defaultValue={place.duration}
                  className="w-full rounded-md p-2 border"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="placeName" className="text-sm">
                  Cost 
                </label>
                <input
                  name="cost"
                  type="text"
                  placeholder="Place Name"
                  defaultValue={place.cost}
                  className="w-full rounded-md p-2 border"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="placeName" className="text-sm">
                  Location
                </label>
                <input
                  name="location"
                  type="text"
                  placeholder="Destination"
                  defaultValue={place.location}
                  className="w-full rounded-md p-2 border"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="placeName" className="text-sm">
                  Emergency
                </label>
                <input
                  name="emergency"
                  type="text"
                  placeholder="Type"
                  defaultValue={place.emergency}
                  className="w-full rounded-md p-2 border"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="placeName" className="text-sm">
                  Photo
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Class"
                  defaultValue={place.photo}
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


const CreatePackage = () => {

    // Event Handler
 const handleAddSpot = (event) => {
   event.preventDefault();
   const form = event.target;
   const name = form.name.value;
   const a_id = form.a_id.value;
   const g_id = form.g_id.value;
   const category = form.category.value;
   const season = form.season.value;
   const duration = form.duration.value;
   const cost = form.cost.value;
   const location = form.location.value;
   const description = form.description.value;
   const emergency = form.emergency.value;
   const photo = form.photo.value;

   const newPackage = {
     name,
     description,
     season,
     category,
     g_id,
     a_id,
     duration,
     cost,
     location,
     emergency,
     photo,
   };
   console.log(newPackage);

   fetch("http://localhost:5000/package", {
     method: "POST",
     headers: {
       "content-type": "application/json",
     },
     body: JSON.stringify(newPackage),
   })
     .then((req) => req.json())
     .then((data) => {
       if (data.insertedID) {
         alert("Package Added Successfully");
         form.reset();
       }

       console.log(data);
     });
 };



   return (
       <div>
           <div className="">
           <section className="  ">
                   <form
                     onSubmit={handleAddSpot}
                     noValidate=""
                     action=""
                     className="container mx-auto space-y-12"
                   >
                     <fieldset className="rounded-md">
                       <div className="p-3 grid gap-4 grid-cols-2">
                         <div className="">
                           <label htmlFor="placeName" className="text-sm">
                             Place Name
                           </label>
                           <input
                             name="name"
                             type="text"
                             placeholder="Place Name"
                             className="w-full rounded-md p-2 border"
                           />
                         </div>
                         <div className="">
                           <label htmlFor="placeName" className="text-sm">
                             Guid ID
                           </label>
                           <input
                             name="g_id"
                             type="number"
                             placeholder="Guid ID"
                             className="w-full rounded-md p-2 border"
                           />
                         </div>
                         <div className="">
                           <label htmlFor="placeName" className="text-sm">
                             Admin ID
                           </label>
                           <input
                             name="a_id"
                             type="number"
                             placeholder="Admin ID"
                             className="w-full rounded-md p-2 border"
                           />
                         </div>
                         <div className="flex-col items-start  flex">
                           <label htmlFor="placeName" className="text-sm">
                             Package Category
                           </label>
                           <select name="category" className="select select-bordered w-full">
                             <option disabled selected>
                               Package Category
                             </option>
                             <option value="Urban">Urban</option>
                             <option value="Leisure">Leisure</option>
                             <option value="Adventure">Adventure</option>
                             <option value="Cultural">Cultural</option>
                             <option value="Wildlife">Wildlife</option>
                           </select>
                         </div>
                         <div className="flex-col items-start  flex">
                           <label htmlFor="placeName" className="text-sm">
                             Season
                           </label>
                           <select name="season" className="select select-bordered w-full">
                             <option disabled selected>
                               Season
                             </option>
                             <option value="Spring">Spring</option>
                             <option value="Winter">Winter</option>
                             <option value="Summer">Summer</option>
                             <option value="Autumn">Autumn</option>
                             <option value="Year-round">Year-round</option>
                           </select>
                         </div>
                         <div className="">
                           <label htmlFor="placeName" className="text-sm">
                             Duration
                           </label>
                           <input
                             name="duration"
                             type="number"
                             placeholder="Package Duration"
                             className="w-full rounded-md p-2 border"
                           />
                         </div>
                         <div className="">
                           <label htmlFor="placeName" className="text-sm">
                             Cost
                           </label>
                           <input
                             name="cost"
                             type="number"
                             placeholder="Cost"
                             className="w-full rounded-md p-2 border"
                           />
                         </div>
                         <div className="">
                           <label htmlFor="placeName" className="text-sm">
                             Location
                           </label>
                           <input
                             name="location"
                             type="text"
                             placeholder="Location Link"
                             className="w-full rounded-md p-2 border"
                           />
                         </div>
                         <div className="">
                           <label htmlFor="placeName" className="text-sm">
                             Emergency Information
                           </label>
                           <input
                             name="emergency"
                             type="text"
                             placeholder="Emergency Information"
                             className="w-full rounded-md p-2 border"
                           />
                         </div>
                         <div className="">
                           <label htmlFor="placeName" className="text-sm">
                             Package Photo
                           </label>
                           <input
                             name="photo"
                             type="text"
                             placeholder="Photo URL"
                             className="w-full rounded-md p-2 border"
                           />
                         </div>

                         <div className="flex flex-col">
                           <label htmlFor="Description" className="text-sm">
                             Description
                           </label>
                           <textarea
                             name="description"
                             className="textarea textarea-bordered "
                             placeholder="Description"
                           ></textarea>
                         </div>
                       </div>
                     </fieldset>
                     <button
                       type="submit"
                       className="btn btn-success btn-outline w-full p-3 "
                     >
                       Create Package
                     </button>
                   </form>
                 </section>
           </div>
       </div>
   );
};

export default CreatePackage;
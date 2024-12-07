import { useLoaderData } from "react-router-dom";

const PackageDetails = () => {
  const place = useLoaderData();

  return (
    <div className="my-10">
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900" data-aos="zoom-in">
              Package Details For {place.name}
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">
              {place.description}
            </p>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
                Tour Plan{" "}
              </h3>
              <p className="mt-3 text-lg dark:text-gray-600">
                Discover seamless travel with our curated tour packages,
                offering comfortable stays, guided tours, delicious meals, and
                stress-free transportation. From iconic landmarks to cultural
                experiences, we ensure every moment is memorable. Let us handle
                the details while you create unforgettable memories!
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex" >
                  <div className="flex-shrink-0" >
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-green-500 dark:text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4" >
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                      This is the {place.category} Categories Package
                    </h4>
                    <p className="mt-2 dark:text-gray-600">
                      Prepare for your adventure by packing essentials based on
                      your package type. For outdoor or adventure tours, include
                      comfortable clothing, sturdy shoes, and sunscreen. If it’s
                      a cultural or city tour, carry weather-appropriate attire
                      and a small bag for essentials. Always keep your travel
                      documents and a first-aid kit handy!
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-green-500 dark:text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                      This is a {place.season} Seasonal Package
                    </h4>
                    <p className="mt-2 dark:text-gray-600">
                      Pack essentials based on the season, such as light
                      clothing and sunscreen for summer or warm layers and rain
                      protection for cooler or rainy months. Always check the
                      weather forecast before your trip!
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-green-500 dark:text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                      This is {place.duration} days Package
                    </h4>
                    <p className="mt-2 dark:text-gray-600">
                      Plan your essentials based on the package duration,
                      ensuring you pack enough clothing, toiletries, and
                      medications for the days while keeping your luggage light
                      for convenience.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-green-500 dark:text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                      This is {place.cost} $ Package
                    </h4>
                    <p className="mt-2 dark:text-gray-600">
                      Plan your expenses according to the package cost,
                      considering what is covered, such as accommodations and
                      meals, and budget extra for personal purchases or
                      activities not included in the coverage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0" >
              <img
                src={place.photo}
                alt=""
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </div>
          </div>


          {/* Emergency Section */}
          <section className="bg-red-100 dark:text-gray-800 " data-aos="zoom-in"
          >
            <div className="container flex flex-col items-center p-4 mx-auto md:p-8">
              <p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl dark:text-gray-700">
                {place.emergency}
              </p>
              <div className="flex justify-center space-x-3">
                <img
                  src="https://i.ibb.co.com/Hh8Xbt8/DALL-E-2024-12-01-19-51-40-A-modern-and-vibrant-logo-design-for-a-travel-agency-named-Globe-Trek-bas.webp"
                  alt=""
                  className="w-20 h-20 bg-center bg-cover rounded-md dark:bg-gray-500"
                />
                <div>
                  <p className="leading-tight">Our Guide ID: {place.g_id}</p>
                  <p className="text-sm leading-tight dark:text-gray-700">
                  If you face any emergencies or have questions during your trip, feel free to reach out to our local guide. They are available to assist you with directions, recommendations, and resolving any issues to ensure a smooth and enjoyable experience.
                  </p>
                  <a
                    className="flex items-center py-2 space-x-1 text-sm dark:text-violet-600"
                    href="/"
                  >
                    <span>In Case of Emergency or Queries</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          
          {/* Map Section */}
          <section className=" dark:bg-orange-100 dark:text-gray-800 border">
            <div className=" container flex flex-col items-center p-4 mx-auto md:p-8">
              <p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl dark:text-gray-700">
                Map Location <i className="fas fa-location    "></i>
              </p>
              <div className="border-4 w-full items-center flex justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7497570.283289285!2d85.04509529093288!3d23.427148888255196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1732459711223!5m2!1sen!2sbd"
                  className="w-full min-h-screen"
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default PackageDetails;

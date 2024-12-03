const Destination = () => {
  return (
    <div>
      <section className="dark:bg-green-100 dark:text-gray-800">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="packages"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
          >
            <img
              src="https://i.ibb.co.com/rtJcSwL/DALL-E-2024-12-01-20-04-49-A-clean-and-professional-banner-image-for-a-Cox-s-Bazar-tour-package-prom.webp"
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                Explore the Serenity of Cox’s Bazar – A Perfect Beach Getaway
              </h3>
              <span className="text-xs dark:text-gray-600">
                From: December 15, 2024 To: December 18, 2024
              </span>
              <p>
                Embark on an unforgettable journey to Cox’s Bazar, the world's
                longest sandy sea beach. Relax amidst golden sands,
                crystal-clear waters, and picturesque sunsets. Explore the
                breathtaking Inani Beach, the serene Himchari Waterfall, and the
                buzzing Laboni Beach Market. Take a day trip to Saint Martin's
                Island and experience tropical paradise. This tour combines
                relaxation, adventure, and the rich culture of the coastal
                region.
              </p>
            </div>
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a
              rel="noopener noreferrer"
              href="packages"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="https://i.ibb.co.com/FBCKtdV/DALL-E-2024-12-01-20-59-21-A-professional-banner-image-for-a-Sajek-Valley-tour-package-in-Bangladesh.webp"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Sajek Valley – Heaven Above the Clouds
                </h3>
                <span className="text-xs dark:text-gray-600">
                  From: February 20, 2025 To: February 22, 2025
                </span>
                <p>
                  Discover the unparalleled beauty of Sajek Valley, a serene
                  hill station often called the "Queen of Hills." Surrounded by
                  lush green mountains and flowing clouds, Sajek is a must-visit
                  for nature enthusiasts. Explore Konglak Hill for stunning
                  panoramic views, relax at Helipad Point, and visit nearby
                  Tindu Village and Ruilui Village to learn about tribal
                  culture. Experience the magic of sunrise and sunset like never
                  before!
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="packages"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="https://i.ibb.co.com/KqJSvgY/DALL-E-2024-12-02-01-01-26-A-simple-and-minimalistic-banner-image-for-a-travel-tour-website-named-Gl.webp"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Explore Khulna – Gateway to the Sundarbans
                </h3>
                <span className="text-xs dark:text-gray-600">
                  From: March 15, 2025 To: March 17, 2025
                </span>
                <p>
                  Dive into the charm of Khulna, the doorway to the mystical
                  Sundarbans, the largest mangrove forest in the world. Take a
                  boat safari through the mangroves to spot the majestic Royal
                  Bengal Tiger, crocodiles, and a variety of bird species. Visit
                  the historical Shat Gombuj Mosque in Bagerhat, and relax by
                  the serene Karamjal Eco Park. The region’s rich history and
                  natural beauty make it a must-visit destination.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="packages"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="https://i.ibb.co.com/dbFKWLj/DALL-E-2024-12-01-21-03-13-A-professional-banner-image-for-a-Sylhet-tour-package-in-Bangladesh-The-d.webp"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Mystic Sylhet – The Land of Tea Gardens and Waterfalls
                </h3>
                <span className="text-xs dark:text-gray-600">
                  From: January 10, 2025 To: January 12, 2025
                </span>
                <p>
                  Experience the lush green beauty of Sylhet, a region renowned
                  for its tea gardens, spiritual sites, and mesmerizing
                  waterfalls. Visit popular attractions like the serene Ratargul
                  Swamp Forest, the breathtaking Bisnakandi, and the majestic
                  Lalakhal River. Explore the sacred Hazrat Shah Jalal and Shah
                  Paran Mazar, and enjoy a relaxing day at Jaflong Zero Point,
                  surrounded by hills and rivers.
                </p>
              </div>
            </a>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-green-300 dark:text-gray-600"
            >
              Load more Destination...
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destination;

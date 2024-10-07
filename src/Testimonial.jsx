const Testimonial = () => {
  return (
    <div>
      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src="https://i.ibb.co.com/MhnXcv4/8.jpg"
            alt=""
            className="w-full h-60 sm:h-96 dark:bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                Virtual Exploration and Real-Time Travel Platform
              </a>
              <p className="text-xs dark:text-gray-600">
                By
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline"
                >
                  <br />
                  Abdullah Al Noman 221-15-5387 <br />
                  Abrar Hameem Bornil 221-15-5331 <br />
                  Khatamoon Nur Maharu 221-15-5421 <br />
                  Nusrat Jahan Mila 221-15-5758 <br />
                  Mostafizur Rahman 221-15-5316
                </a>
              </p>
            </div>
            <div className="dark:text-gray-800">
              <p>
                Project Name: GlobeTrek <br /> Title: Navigating New Horizons with
                Virtual and Personalized Real-Time Travel Guidance <br /><br />1. Problem
                Statement: Travelers often face significant challenges when
                exploring new destinations due to a lack of detailed local
                knowledge. This can lead to missed opportunities to fully
                experience the locale and sometimes even safety concerns. The
                problem is further exacerbated for less popular or newly
                accessible destinations which may not have well-established
                resources for tourists. <br /> <br />2. Solution Statement: GlobeTrek aims to
                revolutionize the travel experience by offering an advanced web
                application that provides a comprehensive suite of features
                designed to enhance users' travel planning and in-destination
                experiences. This platform will serve as a bridge connecting
                travelers with detailed, real-time information about their
                destinations, enriching their journeys and ensuring safety and
                convenience. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

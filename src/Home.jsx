import Banner from "./Banner";
import Destination from "./Destination";
import Discounts from "./Discounts";
import NewsLetter from "./NewsLetter";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>GlobeTrek: Home</title>
      </Helmet>
      <Banner></Banner>
      {/* Popular tour Section */}
      <section>
        <div className="hero bg-green-100 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse justify-center">
            <div className="">
              <img
                src="https://i.ibb.co.com/wYNbSmW/11.jpg"
                className="max-w-sm rounded-2xl shadow-2xl"
              />
            </div>

            <div className="">
              <h1 className="text-5xl font-bold">
                Explore Our Most Popular Tours <i className="fa fa-plane" aria-hidden="true"></i>
              </h1>
              <p className="py-6 text-justify">
                Discover the best of global travel with our handpicked popular
                tours, designed to offer unforgettable experiences. From
                breathtaking landscapes and cultural landmarks to hidden local
                treasures, each tour is carefully curated to showcase the
                essence of your chosen destination. Whether you're seeking
                adventure, relaxation, or immersive cultural encounters, our
                popular tours combine convenience and excitement, ensuring that
                every moment of your journey is extraordinary. Let GlobeTrek
                guide you through the world’s wonders with our top-rated tours,
                tailored to your unique travel style.
              </p>
              <button className="btn btn-success btn-outline">
                View Details <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Selection Section */}
      <div className="text-center m-10">
        <h1 className="font-extrabold text-3xl">
          Choose Your Dream Destination <i className="fa fa-check-circle" aria-hidden="true"></i>
        </h1>
        <p className="text-justify">
          The world is yours to explore—where will you go next? With GlobeTrek,
          you can easily choose from a vast array of breathtaking destinations
          tailored to your interests. Whether you're dreaming of serene beaches,
          vibrant cities, or remote mountain escapes, our platform offers
          detailed guides and real-time updates for each location. Dive into
          immersive virtual tours, get insider tips from local experts, and
          customize your itinerary for a truly personalized adventure. Wherever
          your journey takes you, GlobeTrek ensures it’s unforgettable, safe,
          and exactly what you’ve envisioned.
        </p>
      </div>
      <Destination></Destination>

      {/* Why Chose Us Section */}
      <section>
        <div className="text-center m-10">
          <h1 className="text-3xl font-extrabold">Why Choose GlobeTrek <i className="fa fa-question-circle" aria-hidden="true"></i></h1>
          <p>
            At GlobeTrek, we go beyond ordinary travel planning. Our platform
            combines virtual exploration, real-time updates, and personalized
            guidance to ensure every journey is seamless and memorable. From
            immersive virtual tours of your destination to expert travel advice
            and user-generated tips, we provide everything you need for a
            worry-free experience. Our commitment to safety, convenience, and
            sustainability sets us apart, offering tailored itineraries,
            multi-language support, and a vibrant travel community. Whether
            you're seeking adventure, relaxation, or cultural discovery,
            GlobeTrek is your trusted partner for unforgettable, hassle-free
            travel.
          </p>
        </div>

        {/* Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-5">
          <div className="">
            <div className="card bg-green-100 shadow-xl lg:h-96">
              <div className="card-body">
                <h2 className="card-title font-bold  ">
                  Personalized Travel Experiences
                  <i className="fas fa-user-graduate"></i>
                </h2>
                <p>
                  At GlobeTrek, we understand that every traveler is unique.
                  That's why we offer tailored itineraries and personalized
                  recommendations based on your preferences. Whether you’re a
                  thrill-seeker, culture enthusiast, or simply looking to relax,
                  our platform curates your travel experience to match your
                  style, ensuring every trip is memorable and uniquely yours.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline">Explore Now<i className="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="border-2 border-red-200 card bg-red-100 shadow-xl lg:h-96">
              <div className="card-body">
                <h2 className="card-title font-bold">
                  Real-Time Updates and Safety
                  <i className="fas fa-clock    "></i>
                </h2>
                <p>
                  With real-time travel information at your fingertips,
                  GlobeTrek keeps you informed of the latest updates, from
                  weather conditions and local events to safety alerts and
                  transportation changes. Our advanced tools and local insights
                  give you peace of mind, allowing you to explore confidently,
                  knowing you’re equipped with the most current and accurate
                  details.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline">Explore Now <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="card bg-yellow-100 shadow-xl lg:h-96">
              <div className="card-body">
                <h2 className="card-title font-bold">
                  Immersive Virtual Exploration{" "}
                  <i className="fa fa-internet-explorer" aria-hidden="true"></i>
                </h2>
                <p>
                  GlobeTrek offers more than just travel planning—experience
                  destinations through immersive virtual tours before you even
                  pack your bags. Our detailed, panoramic views of historical
                  landmarks, cultural sites, and local attractions allow you to
                  explore and plan your adventure with confidence. Step into
                  your destination virtually and arrive fully prepared for the
                  journey ahead.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline">Explore Now<i className="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discounts Section */}
      <div className="text-center m-10">
        <h1 className="font-extrabold text-3xl">
          Exclusive Discounts on Your Next Adventure <i className="fa fa-percent" aria-hidden="true"></i>
        </h1>
        <p className="text-justify">
          Don’t miss out on incredible savings with GlobeTrek’s running
          discounts! Whether you're planning a spontaneous getaway or a
          carefully curated trip, our exclusive deals offer unbeatable value on
          top destinations and popular tours. Enjoy discounted rates on
          accommodations, guided tours, and more, all designed to enhance your
          travel experience without breaking the bank. Take advantage of these
          limited-time offers and book your dream journey today with GlobeTrek!
        </p>
      </div>
      <Discounts></Discounts>

      {/* News Letter Section */}
      <NewsLetter></NewsLetter>

{/* Footer part */}

<section className="py-6 dark:bg-gray-100 dark:text-gray-900">
	<div className="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
		<div className="flex flex-col justify-center lg:text-left">
			<p className="mb-1 text-sm font-medium tracking-widest uppercase dark:text-green-600">GlobeTrek Now on the google play stor and app stor</p>
			<h1 className="py-2 text-3xl font-medium leading-tight title-font">Download GlobeTrek Mobile App For Better Experience.</h1>
		</div>
		<div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
			<button className="inline-flex items-center px-6 py-3 rounded-lg dark:bg-green-600 dark:text-gray-50">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current w-7 h-7 dark:text-gray-50">
					<path d="M 5.4160156 2.328125 L 12.935547 10.158203 C 13.132547 10.363203 13.45925 10.363203 13.65625 10.158203 L 15.179688 8.5742188 C 15.405688 8.3392188 15.354312 7.956875 15.070312 7.796875 C 11.137313 5.571875 6.2620156 2.811125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.576172 12.324219 C 11.762172 12.131219 11.762172 11.826813 11.576172 11.632812 L 3.140625 2.8476562 z M 17.443359 9.2578125 C 17.335484 9.2729375 17.233297 9.32375 17.154297 9.40625 L 15.015625 11.632812 C 14.829625 11.825812 14.829625 12.130219 15.015625 12.324219 L 17.134766 14.529297 C 17.292766 14.694297 17.546141 14.729188 17.744141 14.617188 C 19.227141 13.777188 20.226563 13.212891 20.226562 13.212891 C 20.725562 12.909891 21.007 12.443547 21 11.935547 C 20.992 11.439547 20.702609 10.981938 20.224609 10.710938 C 20.163609 10.676937 19.187672 10.124359 17.763672 9.3183594 C 17.664172 9.2623594 17.551234 9.2426875 17.443359 9.2578125 z M 13.296875 13.644531 C 13.165875 13.644531 13.034047 13.696328 12.935547 13.798828 L 5.4746094 21.566406 C 6.7566094 20.837406 11.328781 18.249578 15.050781 16.142578 C 15.334781 15.981578 15.386156 15.599281 15.160156 15.363281 L 13.65625 13.798828 C 13.55775 13.696328 13.427875 13.644531 13.296875 13.644531 z"></path>
				</svg>
				<span className="flex flex-col items-start ml-4 leading-none">
					<span className="mb-1 text-xs">GET IT ON</span>
					<span className="font-semibold title-font">Google Play</span>
				</span>
			</button>
			<button className="inline-flex items-center px-5 py-3 rounded-lg dark:bg-green-600 dark:text-gray-50">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="fill-current w-7 h-7 dark:text-gray-50">
					<path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
				</svg>
				<span className="flex flex-col items-start ml-4 leading-none">
					<span className="mb-1 text-xs">Download on the</span>
					<span className="font-semibold title-font">App Store</span>
				</span>
			</button>
		</div>
	</div>
</section>

    </div>


  );
};

export default Home;

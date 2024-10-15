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
        <div className="hero bg-base-200 min-h-screen rounded-3xl">
          <div className="hero-content flex-col lg:flex-row-reverse justify-center">
            <img
              src="https://i.ibb.co.com/wYNbSmW/11.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div className="">
              <h1 className="text-5xl font-bold">
                Explore Our Most Popular Tours
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
              <button className="btn btn-primary">Explore</button>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Selection Section */}
      <div className="text-center my-5">
        <h1 className="font-extrabold text-3xl">
          Choose Your Dream Destination
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
        <div className="text-center my-5">
          <h1 className="text-3xl font-extrabold">Why Choose GlobeTrek?</h1>
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
            <div className="card bg-green-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title font-bold ">Personalized Travel Experiences</h2>
                <p>
                  At GlobeTrek, we understand that every traveler is unique.
                  That's why we offer tailored itineraries and personalized
                  recommendations based on your preferences. Whether you’re a
                  thrill-seeker, culture enthusiast, or simply looking to relax,
                  our platform curates your travel experience to match your
                  style, ensuring every trip is memorable and uniquely yours.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline">Explore Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="border card bg-red-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title font-bold">Real-Time Updates and Safety</h2>
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
                  <button className="btn btn-outline">Explore Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="card bg-yellow-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title font-bold">Immersive Virtual Exploration</h2>
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
                  <button className="btn btn-outline">Explore Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discounts Section */}
      <div className="text-center my-5">
        <h1 className="font-extrabold text-3xl">
          Exclusive Discounts on Your Next Adventure
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
    </div>
  );
};

export default Home;

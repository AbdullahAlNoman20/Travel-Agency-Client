import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen rounded-3xl my-4"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/LdxJsFz/Dhaka-1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              <span>
                <Typewriter
                  words={[
                    "Navigating New Horizons with Virtual and Personalized Real-Time Travel Guidance",
                  ]}
                  loop={""}
                  cursor
                  cursorStyle="✒️"
                  typeSpeed={20}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="mb-5 w-full text-white px-24 text-justify">
              GlobeTrek is a cutting-edge travel platform designed to transform
              the way you explore the world. With virtual local guides,
              real-time travel updates, and community-driven content, GlobeTrek
              offers a personalized and immersive travel experience. Whether
              discovering hidden gems, following in the footsteps of
              celebrities, or connecting with like-minded travelers, GlobeTrek
              ensures that each journey is safe, enriching, and tailored to your
              preferences. Backed by advanced technology, multi-language
              support, and a premium membership offering exclusive insights,
              GlobeTrek is your trusted companion for seamless, informed, and
              unforgettable adventures.
            </p>

            {/* Button Section */}
            <div className=" bg-slate-300 bg-opacity-40 rounded-lg p-5 text-black lg:flex justify-around">
              <div className="">
                <select className="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    Where To Go
                  </option>
                  <option>Dhaka</option>
                  <option>Khulna</option>
                </select>
              </div>
              <div className="">
                <select className="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    When
                  </option>
                  <option>Winter</option>
                  <option>Rain</option>
                </select>
              </div>
              <div className="">
                <select className="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    Select Type
                  </option>
                  <option>Classic</option>
                  <option>Economy</option>
                </select>
              </div>
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

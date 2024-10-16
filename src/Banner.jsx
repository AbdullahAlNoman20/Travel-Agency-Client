import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Search_Result from "./Search_Result";

const Banner = () => {
  const [whereToGo, setWhereToGo] = useState("");
  const [when, setWhen] = useState("");
  const [type, setType] = useState("");

  // Search Data
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Construct the search query
    const searchParams = {
      whereToGo,
      when,
      type,
    };
    console.log(searchParams);

    // Send the search parameters to the backend
    fetch("http://localhost:5000/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchParams),
    })
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);
      })
      .catch((error) => {
        console.error("Error searching:", error);
      });
  };

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
                    "Virtual Travel Experiences","Real-Time Travel Guidance","Global Adventure Tours","Personalized Travel Planning","Destination Exploration"
                  ]}
                  loop={""}
                  cursor
                  cursorStyle="✒️"
                  typeSpeed={50}
                  deleteSpeed={10}
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
                <select
                  value={whereToGo}
                  onChange={(e) => setWhereToGo(e.target.value)}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled value="">
                    Where To Go
                  </option>
                  <option>Dhaka</option>
                  <option>Khulna</option>
                </select>
              </div>
              <div className="">
                <select
                  value={when}
                  onChange={(e) => setWhen(e.target.value)}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled value="">
                    When
                  </option>
                  <option>Winter</option>
                  <option>Rain</option>
                </select>
              </div>
              <div className="">
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled value="">
                    Select Type
                  </option>
                  <option>Classic</option>
                  <option>Economy</option>
                </select>
              </div>
              <button onClick={handleSearch} className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Search_Result results={searchResults}></Search_Result>
      </div>
    </div>
  );
};

export default Banner;

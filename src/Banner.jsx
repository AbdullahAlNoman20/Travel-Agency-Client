const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen rounded-3xl my-4"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">Explore Your Travel</h1>
            <p className="mb-5 w-full text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
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

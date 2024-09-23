import Banner from "./Banner";
import Destination from "./Destination";
import Discounts from "./Discounts";
import NewsLetter from "./NewsLetter";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* Popular tour Section */}
      <section>
        <div className="hero bg-base-200 min-h-screen rounded-3xl">
          <div className="hero-content flex-col lg:flex-row-reverse justify-center">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div className="">
              <h1 className="text-5xl font-bold">Our Popular Tours</h1>
              <p className="py-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae officiis vel atque sequi corrupti cum, eveniet rem
                repudiandae eligendi ea, laborum laudantium quo, accusamus earum
                doloribus illum? Suscipit, dicta deserunt.
              </p>
              <button className="btn btn-primary">Explore</button>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Selection Section */}
      <div className="text-center my-5">
        <h1 className="font-extrabold text-3xl">Chose Your Destination</h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime earum
          obcaecati reprehenderit beatae animi culpa sequi sed vero aliquam
          error molestias voluptatibus ullam aliquid aut, provident laboriosam
          inventore! Enim, hic!
        </p>
      </div>
      <Destination></Destination>

      {/* Why Chose Us Section */}
      <section>
        <div className="text-center my-5">
          <h1 className="text-3xl font-extrabold">Why Chose Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque, optio nesciunt eos sequi libero, asperiores tenetur ea
            explicabo excepturi consectetur, harum earum nostrum qui expedita
            nam fugit voluptas exercitationem! Alias.
          </p>
        </div>
        <div className=" flex flex-col gap-5">
          <div className="flex justify-center gap-5">
            <div className="">
              <div className="card bg-green-100 w-96 shadow-xl">

                <div className="card-body">
                  <h2 className="card-title">Highlight1</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-outline">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card bg-red-100  w-96 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Highlight2</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-outline">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="card bg-yellow-100 w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Highlight3</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


{/* Discounts Section */}
<Discounts></Discounts>



      {/* News Letter Section */}
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;

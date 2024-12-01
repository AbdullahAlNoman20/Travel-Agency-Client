const Discounts = () => {
  return (
    <div>
      <div className="carousel w-full my-5">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/rtJcSwL/DALL-E-2024-12-01-20-04-49-A-clean-and-professional-banner-image-for-a-Cox-s-Bazar-tour-package-prom.webp"
            className="w-full"
          />
          
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/X2ZTwPM/DALL-E-2024-12-01-19-51-33-A-vibrant-banner-image-for-a-travel-agency-named-Globe-Trek-based-in-Bang.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/dbFKWLj/DALL-E-2024-12-01-21-03-13-A-professional-banner-image-for-a-Sylhet-tour-package-in-Bangladesh-The-d.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/jkFFHJM/3.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discounts;

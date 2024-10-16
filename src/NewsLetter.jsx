const NewsLetter = () => {
  return (
    <div>
      <div className="my-4 grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-3xl md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Stay Connected with GlobeTrek
            </h2>
            <div className="dark:text-gray-600">
              Never miss an update! Subscribe to the GlobeTrek newsletter and be
              the first to know about exclusive travel deals, new destinations,
              and insider tips from experts. Whether you’re looking for
              inspiration for your next adventure or updates on the latest
              travel trends, our newsletter brings the world of travel directly
              to your inbox. Stay informed and get ready to explore the globe
              with GlobeTrek. Sign up today!
            </div>
          </div>
          <img
            src="https://i.ibb.co.com/LdxJsFz/Dhaka-1.jpg"
            alt=""
            className="p-6 h-52 md:h-64"
          />
        </div>
        <form noValidate="" className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded border dark:bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded border dark:bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded border dark:bg-gray-100"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;

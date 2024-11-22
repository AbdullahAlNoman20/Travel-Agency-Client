const NewsLetter = () => {
  return (
    <div>
      <div className="my-8 grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-green-100 dark:text-gray-800">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-xl font-bold leading-tight lg:text-3xl">
              Stay Connected with GlobeTrek <i className="fa fa-connectdevelop" aria-hidden="true"></i>
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
              className="w-full p-3 rounded-xl border dark:bg-green-50"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded-xl border dark:bg-green-50"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded-xl border dark:bg-green-50"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide rounded dark:bg-green-400 dark:text-black"
          >
            Send Email <i className="fa fa-paper-plane" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;

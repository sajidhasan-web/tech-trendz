import { Link } from "react-router-dom";



const Hero = () => {
  return (
    <div className="hero -translate-y-8">
      <div className="hero-content text-center">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold">
            Welcome to <span className="bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">TechTrendz</span>
          </h1>
          <p className="py-6 max-w-md font-semibold">
            Where Innovation Meets Technology. Stay Ahead with the Latest
            Trends, Insights, and News in the Tech World!
          </p>
          <div className="flex gap-5 justify-center">
            <Link
              to={"/bookmarks"}
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
              <span className="relative text-black group-hover:text-white">
                Bookmarks
              </span>
            </Link>
            <Link
              to={"/blogs"}
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
              <span className="relative text-black group-hover:text-white">
                Read Blogs
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

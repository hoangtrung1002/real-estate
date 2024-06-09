import Banner from "@/assets/banner.png";
const Home = () => {
  return (
    <div className="w-full">
      <div className="relative w-full h-fit">
        <img src={Banner} alt="banner" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 pt-12">
          <h1 className="text-5xl text-white">Find Your Dream Home</h1>
          <span className="flex flex-col items-center text-lg text-white">
            <span>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere
            </span>
            <span>
              cubilia curae; Proin sodales ultrices nulla blandit volutpat.
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;

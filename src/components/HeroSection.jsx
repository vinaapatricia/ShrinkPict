

const HeroSection = () => {

  return (
    <div className="flex flex-col items-center mt-8 lg:mt-40">
      <h1 className="text-4xl font-semibold sm:text-6xl lg:text-7xl text-center tracking-wide">
      Say Goodbye to Bloated Files with  
        <span className="bg-gradient-to-r from-blue-700 to-purple-800 text-transparent bg-clip-text">
          {" "}
          ShrinkPict
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Our powerful compression tool optimizes your media without sacrificing quality, keeping your website lightning-fast.
      Boost Your Website Speed. Compress Files Here!
      </p>
      <div className="flex justify-center my-10">
        <a
                href="#ChooseFeature"
                className="bg-gradient-to-r from-blue-700 to-purple-800 py-3 px-4 mx-3 rounded-3xl text-white"
              >
                Wanna Contribute?
              </a>
      </div>
    </div>
  );
};

export default HeroSection;

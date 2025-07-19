import HeroImg from "../assets/hero_image.png";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-wrap w-full justify-center items-center gap-8">
        {/* Left side */}
        <div className="flex flex-col px-4 py-6 w-full md:w-1/2 max-w-lg">
          <h1 className="font-bold text-4xl mb-4">RivanCyber</h1>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            ducimus, architecto iusto provident harum hic! Officia aliquid a
            voluptas minima eos autem repellat vitae ipsa, quo itaque quam
            maiores fugiat.
          </p>
          <button
            className="bg-blue-900
              text-white 
              px-8 
              py-3 
              rounded-lg 
              shadow-md 
              hover:bg-blue-700
              transition 
              duration-300 
              ease-in-out
              focus:outline-none
              focus:ring-2
              focus:ring-blue-400
              focus:ring-opacity-75"
          >
            Enroll Now
          </button>
        </div>

        {/* right side */}
        <div>
          <img className="w-100 h-100 mt-10" src={HeroImg} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

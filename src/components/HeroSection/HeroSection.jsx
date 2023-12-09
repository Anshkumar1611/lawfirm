/* eslint-disable react/no-unescaped-entities */
import { heroSection } from "../../assets";
import { heroDescription, heroHeading2, heroHeading1 } from "../../data/data";
import { MdEmail } from "react-icons/md";
import Rounded from "../common/buttons/Rounded";

const HeroSection = () => {
  return (
    <div
      className="bg-black px-8 md:px-16 lg:px-36 py-4 md:py-8 lg:py-14 "
      id="home"
    >
      <div className="flex flex-col items-center lg:flex lg:flex-row lg:items-center justify-between">
        <div className="basis-1/2">
          <div className="text-5xl md:text-6xl font-bold my-2 md:my-4 lg:my-8 ">
            {heroHeading1}
          </div>
          <div className="text-5xl md:text-6xl font-bold my-2 md:my-4 lg:my-8">
            {heroHeading2}
          </div>
          <p className="text-lg text-white opacity-30 my-8">
            {heroDescription}
          </p>
          <div className="bg-gray flex flex-row justify-between items-center rounded-full gap-2 md:w-9/12 px-2">
            <div className="flex gap-2 flex-1 items-center p-1 md:p-6">
              <MdEmail className="text-gray-500 text-lg " />
              <input
                className=" bg-gray focus:outline-none p-2 rounded placeholder-gray-500"
                placeholder="Enter your email address"
                type="email"
              />
            </div>
            <Rounded title="Let's Talk" valid />
          </div>
        </div>
        <div className="p-0 md:pl-14">
          <img src={heroSection} alt="hero-profile" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import { logo } from "../../assets";
import { navLinks } from "../../data/data";
import { GiHamburgerMenu } from "react-icons/gi";
import Contact from "../common/buttons/Contact";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <nav className="bg-black px-8 md:px-16 lg:px-36 py-8">
      <div className="flex flex-row justify-between">
        <img src={logo} alt="logo" />
        <ul className="hidden lg:flex flex-wrap justify-center items-center">
          {navLinks.map((navLink) => {
            return (
              <li
                className="px-3 cursor-pointer font-semibold hover:text-secondary hover:scale-110"
                key={navLink.id}
              >
                <a href={navLink.url}>{navLink.name}</a>
              </li>
            );
          })}
        </ul>
        <div className="hidden lg:block">
          <Contact title={"Contact Now"} />
        </div>
        <div className="lg:hidden block">
          {!toggle && (
            <GiHamburgerMenu
              className="text-3xl cursor-pointer hover:scale-90"
              onClick={handleToggle}
            />
          )}
        </div>
        {toggle ? (
          <div
            className={`bg-gray h-screen w-64 fixed top-0 right-0 z-10 p-6 backdrop-blur-sm bg-white/80 transition-transform transform duration-700 ${
              toggle ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end items-center">
              <IoMdCloseCircle
                onClick={handleToggle}
                className="text-5xl text-secondary"
              />
            </div>
            <ul className="flex flex-col gap-4 py-8">
              {navLinks.map((navLink) => {
                return (
                  <li
                    className="px-3 cursor-pointer text-lg font-semibold text-gray hover:text-secondary "
                    key={navLink.id}
                  >
                    <a href={navLink.url}>{navLink.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Navbar;

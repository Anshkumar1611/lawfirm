import { logo } from "../../assets";
import { footerEnd, navLinks } from "../../data/data";
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
} from "react-icons/fa";

const footerIcons = [
  { index: 0, icon: <FaInstagram /> },
  { index: 1, icon: <FaFacebookSquare /> },
  { index: 2, icon: <FaTwitterSquare /> },
  { index: 3, icon: <FaPinterestSquare /> },
];
const Footer = () => {
  return (
    <footer className="bg-black px-8 md:px-16 lg:px-36 lg:h-80">
      <div className="flex flex-col justify-between gap-8 py-8 md:py-16 lg:py-24 h-full">
        <div className="md:flex md:flex-row md:justify-between flex flex-col gap-4">
          <img src={logo} alt="logo" className="w-fit" />
          <ul className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center lg:basis-2/5">
            {navLinks.map((navLink) => {
              return (
                <li
                  className="md:px-3 cursor-pointer hover:text-secondary "
                  key={navLink.id}
                >
                  <a href={navLink.url}>{navLink.name}</a>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-start items-center gap-4">
            {footerIcons.map((icon) => (
              <div
                key={icon.index}
                className="text-secondary cursor-pointer text-2xl hover:scale-110"
              >
                {icon.icon}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          {footerEnd.map((item) => (
            <p className="text-sm" key={item}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

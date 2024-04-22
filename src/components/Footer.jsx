import { Link } from "react-router-dom";
import Icon from "./icons/Icon";

const Footer = () => {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <footer>
      <div className="bg-black flex flex-col items-center justify-center gap-12 sm:flex-row sm:items-start sm:justify-evenly py-4 px-8">
        <div className="text-white">
          <p className="text-base sm:text-lg mb-2">FIND EVENTS</p>
          <ul className="text-xs sm:text-sm flex gap-1 flex-col items-center sm:items-start">
            <li>This week</li>
            <li>This weekend</li>
            <li>This month</li>
          </ul>
        </div>

        <div className="text-white">
          <p className="text-base sm:text-lg mb-2">USEFUL LINKS</p>
          <ul className="text-xs sm:text-sm flex gap-1 flex-col items-center sm:items-start">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/terms">Terms</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
          </ul>
        </div>

        <div className="text-white">
          <p className="text-base sm:text-lg mb-2">FOLLOW US</p>
          <ul className="text-xs sm:text-sm flex gap-1 flex-col items-center sm:items-start">
            <li>
              <a
                className="inline-flex items-center justify-center gap-2"
                href="https://www.instagram.com/"
                target="_blank"
              >
                <Icon name="Instagram" size={18} />
                Instagram
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center justify-center gap-2"
                href="https://www.facebook.com/"
                target="_blank"
              >
                <Icon name="Facebook" size={18} />
                Facebook
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center justify-center gap-2"
                href="https://twitter.com/"
                target="_blank"
              >
                <Icon name="Twitter" size={18} />
                Twitter
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center justify-center gap-2"
                href="https://www.linkedin.com/feed/"
                target="_blank"
              >
                <Icon name="Linkedin" size={18} />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-100 p-2 text-center">
        <p>
          &copy; {getYear()}, {import.meta.env.VITE_COMPANY_NAME}. All rights
          reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

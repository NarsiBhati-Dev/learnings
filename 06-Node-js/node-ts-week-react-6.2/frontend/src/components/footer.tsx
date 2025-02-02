import React from "react";
import { links } from "../config/config";
import TwitterIcon from "../assets/twitter-icon";
import LinkedinIcon from "../assets/linkedin";

const linkStyle =
  "hover:text-amber-500 flex text-xl items-center gap-1 hover:scale-120 hover:-translate-y-2 transition-all duration-300";

const Footer: React.FC = () => {
  return (
    <footer className="md:bg-amber-50  bg-black text-lg text-white md:shadow-none shadow-2xl  md:rounded-none rounded-t-4xl mx-2">
      <div className="flex justify-around px-10 py-4 gap-4 max-w-2xl m-auto bg-black  shadow-2xl rounded-t-4xl">
        <a
          href={links.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className={linkStyle}
        >
          <TwitterIcon className="w-8 h-8" />
          Twitter
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={linkStyle}
        >
          <LinkedinIcon className="w-8 h-8" />
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;

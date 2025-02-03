import React from "react";
import { links } from "../config/config";
import TwitterIcon from "../assets/twitter-icon";
import LinkedinIcon from "../assets/linkedin";
import GithubIcon from "../assets/github-icon";

const linkStyle =
  "hover:text-blue-500 flex text-xl items-center gap-2 hover:scale-120 hover:-translate-y-2 transition-all duration-300";

const Footer: React.FC = () => {
  return (
    <footer className="md:bg-amber-50  bg-black text-lg text-white md:shadow-none shadow-2xl  md:rounded-none rounded-t-4xl mx-2">
      <div className="flex justify-around px-10 py-4 gap-4 max-w-4xl m-auto bg-black  shadow-2xl rounded-t-4xl">
        <a
          href={links.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className={linkStyle}
        >
          <TwitterIcon className="w-5 h-5" />
          <div className="md:block hidden">Twitter</div>
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={linkStyle}
        >
          <LinkedinIcon className="w-6 h-6" />
          <div className="md:block hidden">LinkedIn</div>
        </a>
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={linkStyle}
        >
          <GithubIcon className="w-6 h-6" />
          <div className="md:block hidden">Github</div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

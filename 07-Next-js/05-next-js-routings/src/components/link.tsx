import Link from "next/link";
import React from "react";

interface LinkCoProps {
  link: string;
  title: string;
}

const LinkCo: React.FC<LinkCoProps> = ({ link, title }) => {
  return (
    <Link
      href={link}
      className="border border-black px-8 py-2 rounded-md m-4 text-center"
    >
      {title}
    </Link>
  );
};

export default LinkCo;

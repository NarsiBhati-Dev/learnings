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
      className="border w-full px-8 py-2 rounded-md mb-4 block text-center"
    >
      {title}
    </Link>
  );
};

export default LinkCo;

import React from "react";

interface Error {
  error: string;
}

const Error: React.FC<Error> = ({ error }) => {
  return <p className=" m-1 text-red-400">{error}</p>;
};

export default Error;

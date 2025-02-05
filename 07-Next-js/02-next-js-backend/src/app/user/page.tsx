import axios from "axios";
import React from "react";

const getUserData = async () => {
  const Response = axios.get("http://localhost:3000/api/v1/user/details");
  return (await Response).data;
};

const UserPage: React.FC = async () => {
  const userData = await getUserData();

  return (
    <section className="h-screen w-screen flex justify-center items-center">
      <div className="bg-white p-4 rounded-md text-black">
        <h1 className="font-extrabold">username : {userData.username} </h1>
        <h1 className="font-extrabold">username : {userData.email} </h1>
      </div>
    </section>
  );
};

export default UserPage;

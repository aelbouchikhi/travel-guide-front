import React from "react";
import { getUser } from "../UserContext/UserContext";

const Profile = () => {
  const { user } = getUser();
  return (
    <div className=" w-full h-[100vh] pt-24 flex justify-center gap-8">
      <h1>hello {user.username}</h1>
      <h1>your emaail : {user.email}</h1>
    </div>
  );
};

export default Profile;

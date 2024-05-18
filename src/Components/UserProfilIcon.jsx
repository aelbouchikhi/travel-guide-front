import React, { useState } from "react";
import userPhoto from "../assets/images/user.png";
import { getUser } from "../UserContext/UserContext";
import { useNavigate } from "react-router-dom";
const hoverdrop =
  "font-Montserrat hover:border-r-4 hover:border-slate-500  hover:bg-gradient-to-r from-white to-gray-200 rounded-lg  p-2 w-40";

const UserProfilIcon = () => {
  const navigate = useNavigate();
  const [showDrop, setShowDrop] = useState(false);
  const { user, setUser } = getUser();
  return (
    <div className="relative">
      <div
        onClick={() => setShowDrop(!showDrop)}
        className={` p-1 flex items-center justify-center w-18 h-18 rounded-xl cursor-pointer  border-2 ${
          showDrop ? "border-orange-300" : " border-slate-300"
        }`}
      >
        <div className=" rounded-md w-14 h-14 bg-gradient-to-t from-white to-gray-400">
          <img src={userPhoto} alt="" />
        </div>
      </div>
      {showDrop && (
        <div className="cursor-pointer border-2 border-gray-100 bg-gray-50 absolute rounded-lg right-1 top-11 ">
          <ul className=" list-none">
            <li onClick={() => navigate("/profile")} className={hoverdrop}>
              {user.username}
            </li>
            <li className={hoverdrop}>Report</li>
            <li
              onClick={() => {
                localStorage.removeItem("user");
                setUser(null);
              }}
              className={hoverdrop}
            >
              Log Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfilIcon;

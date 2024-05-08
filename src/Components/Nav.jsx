import headerLogo from "../assets/images/header-logo.png";
import { navLinks } from "../../constants";
import { hamburger } from "../assets/icons/index";
import { IoSearch } from "react-icons/io5";
import React, { useState } from "react";
import RegisterModal from "../Pages/Regsiter";
import LoginModal from "../Pages/Login";
import { Link } from "react-router-dom";
import Search from "./Search";

const Nav = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };
  const openRegisterModal = () => {
    setShowRegisterModal(true);
  };
  const closeRegisterModal = () => {
    setShowRegisterModal(false);
  };
  const openSearchModal = () => {
    setShowSearchModal(true);
  };
  const clsoeSearchModal = () => {
    setShowSearchModal(false);
  };

  return (
    <header className="py-4 text-[15px] left-0 right-0 container mx-auto absolute z-10 w-full">
      <nav className="flex justify-between  items-center">
        <a href="">
          <img src={headerLogo} width={160} />
        </a>
        <ul className="flex flex-grow  items-center justify-center   max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label} className="list-none">
              <Link
                to={item.href}
                className=" font-montserrat   first:text-[#222831] text-slate-gray  ml-3"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-end   items-center flex-grow max-lg:hidden">
          <IoSearch
            className=" text-slate-gray mr-2 hover:text-white hover:bg-primary p-2 hover:transition-colors   w-[40px] h-[40px] rounded-full cursor-pointer "
            size={25}
            onClick={openSearchModal}
          />

          <div className=" ">
            <button
              onClick={openLoginModal}
              className="font-montserrat pl-2 mr-4 capitalize  font-medium text-[#222831]"
            >
              log in
            </button>
            <button
              onClick={openRegisterModal}
              className="font-montserrat  capitalize bg-primary text-white px-4 py-2 rounded-full  font-medium border border-primary"
            >
              sign up
            </button>
          </div>
        </div>

        <div className="hidden max-lg:block">
          <img src={hamburger} width={25} height={25} alt="menu-icon" />
        </div>
      </nav>
      <LoginModal
        show={showLoginModal}
        openRegister={openRegisterModal}
        onClose={closeLoginModal}
      />
      <RegisterModal
        show={showRegisterModal}
        openLogin={openLoginModal}
        onClose={closeRegisterModal}
      />
      <Search
        show={showSearchModal}
        onClose={clsoeSearchModal}
      />
    </header>
  );
};

export default Nav;

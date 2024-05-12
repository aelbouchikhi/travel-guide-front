import headerLogo from "../assets/images/header-logo.png";
import { navLinks } from "../../constants";
import { FaXmark, FaBars, FaB } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import RegisterModal from "../Pages/Regsiter";
import LoginModal from "../Pages/Login";
import { Link, NavLink } from "react-router-dom";
import Search from "./Search";

const Nav = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
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
    <header className="py-4 text-[15px]   top-0 px-6 lg:px-16  sticky z-50 w-full">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <img src={headerLogo} width={160} />
        </Link>
        <ul className="  items-center gap-4 lg:gap-8 justify-center hidden md:flex">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="list-none relative font-montserrat font-medium  hover:text-primary transition-all duration-300 "
            >
              <NavLink
                to={item.link}
                className={({ isActive }) => (isActive ? "active-link " : "")}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex justify-end  items-center  hidden md:flex">
          <IoSearch
            className=" text-slate-gray mr-2 transition-all duration-1000 hover:text-white hover:bg-primary p-2 hover:transition-colors   w-[40px] h-[40px] rounded-full cursor-pointer "
            size={25}
            onClick={openSearchModal}
          />

          <div className=" ">
            <button
              onClick={openLoginModal}
              className="font-montserrat pl-2 hidden lg:inline-block mr-4 hover:text-primary transition-all duration-300 capitalize  font-medium text-[#222831]"
            >
              log in
            </button>
            <button
              onClick={openRegisterModal}
              className="font-montserrat  capitalize bg-primary hover:opacity-90 transition-all duration-300 text-white px-4 py-2 rounded-full  font-medium border border-primary"
            >
              sign up
            </button>
          </div>
        </div>

        {/* open menu logic */}

        <div className="md:hidden z-10  ml-6">
          {/* {isMenuOpen ? (
            <FaXmark className="text-3xl" onClick={toggleMenu} />
          ) : (
            <FaBars className="text-3xl cursor-pointer" onClick={toggleMenu} />
          )} */}
          <FaBars className="text-3xl cursor-pointer " onClick={toggleMenu} />
        </div>
          <div className="overflow-hidden absolute top-[0]  right-0 w-[100%] h-[100vh] md:w-[0] md:h-[0]">
            <div
              className={` transition-all duration-500   ${
                isMenuOpen ? "menu-open" : "menu-closed"
              } bg-white md:hidden  shadow-lg flex flex-col items-center py-8 gap-8 absolute top-[0]  z-20 right-0 px-4 h-[100vh] w-[50%]`}
            >
              <FaXmark
                className="absolute left-4 text-xl cursor-pointer"
                onClick={closeMenu}
              />
              <ul className="leading-[3rem] pt-[4rem]">
                {navLinks.map((item) => (
                  <li key={item.label} className="list-none">
                    <Link
                      to={item.link}
                      className=" font-montserrat  font-medium hover:text-primary transition-all duration-300  first:text-[#222831] text-slate-gray  "
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex justify-end  items-center ">
                <IoSearch
                  className=" text-slate-gray mr-2 transition-all duration-1000 hover:text-white hover:bg-primary p-2 hover:transition-colors   w-[40px] h-[40px] rounded-full cursor-pointer "
                  size={25}
                  onClick={openSearchModal}
                />

                <div className=" ">
                  <button
                    onClick={openLoginModal}
                    className="font-montserrat pl-2 hidden lg:inline-block mr-4 hover:text-primary transition-all duration-300 capitalize  font-medium text-[#222831]"
                  >
                    log in
                  </button>
                  <button
                    onClick={openRegisterModal}
                    className="font-montserrat  capitalize bg-primary hover:opacity-90 transition-all duration-300 text-white px-4 py-2 rounded-full  font-medium border border-primary"
                  >
                    sign up
                  </button>
                </div>
              </div>
            </div>
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
      <Search show={showSearchModal} onClose={clsoeSearchModal} />
    </header>
  );
};

export default Nav;

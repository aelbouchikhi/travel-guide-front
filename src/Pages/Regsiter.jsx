import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import "./register.css";
import { register } from "../Api/axios.Config";

const RegisterModal = ({ show, onClose, openLogin }) => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [dataRegister, setDataRegister] = useState();
  const handChangeForumRegister = (e) => {
    // e.preventDefault();
    setDataRegister({ ...dataRegister, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(dataRegister);
    register(dataRegister)
      .then((res) => {
        //console.log(res.data);
        // localStorage.setItem("token", res.data.token);
        // onClose();
        // openLogin();
        // Navigate("/home");
      })
      .catch((error) => {
        console.log("erroe message ", error);
      });
    console.log("Logging in with:", { dataRegister });
    onClose();
  };
  const handleSwitch = () => {
    onClose();
    openLogin();
  };

  return (
    <>
      {show && (
        <section className="register-section font-montserrat capitalize font-medium ">
          <div className="modal-overlay">
            <div className="modal-container">
              <form className="register-modal">
                <TfiClose onClick={onClose} className="close-btn" />
                {/* <button className='google-auth'> */}
                {/* <FcGoogle size={25} className='google-auth-btn' /> */}
                {/* <span className='google-auth-text'>Sign in with google</span> */}
                {/* </button> */}
                {/* <p className='divider'>or sign in with email</p> */}
                <div className="flex gap-4">
                  <div className="firstname">
                    <p className="firstname-label">first name</p>
                    <input
                      onChange={handChangeForumRegister}
                      name="firstname"
                      type="text"
                      placeholder="first name"
                    />
                  </div>
                  <div className="lastname">
                    <p className="lastname-label">last name</p>
                    <input
                      onChange={handChangeForumRegister}
                      name="lastname"
                      type="text"
                      placeholder="last name"
                    />
                  </div>
                </div>
                <p className="username-label">username</p>
                <input
                  onChange={handChangeForumRegister}
                  name="username"
                  type="text"
                  placeholder="username"
                />
                <p className="email-label">email</p>
                <input
                  onChange={handChangeForumRegister}
                  name="email"
                  type="email"
                  placeholder="email"
                />
                <p className="password-label">password</p>
                <input
                  onChange={handChangeForumRegister}
                  name="password"
                  type="password"
                  placeholder="password"
                />
                <div className="terms-section flex items-center gap-2">
                  <input className="terms-btn cursor-pointer" type="checkbox" />
                  <span className="text-sm text-[#777] w-full">
                    by clicking on this you are aggred about
                  </span>
                </div>
                <button
                  onClick={handleRegister}
                  className="submit-btn"
                  type="submit"
                >
                  sign up
                </button>
                <p className="notmember-text">
                  already have account?
                  <Link onClick={handleSwitch} className="signin-link">
                    sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default RegisterModal;

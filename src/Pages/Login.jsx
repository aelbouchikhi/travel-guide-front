import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { TfiClose } from "react-icons/tfi";
import { Link, Navigate } from "react-router-dom";
import "./login.css";
import { login } from "../Api/axios.Config";
import { useNavigate } from "react-router-dom";

const Login = ({ show, onClose, openRegister }) => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  // const [dataLoginUser, setDataLoginUser] = useState();
  // const handleChangeLoginUser = (e) => {
  //   setDataLoginUser({ ...dataLoginUser, [e.target.name]: e.target.value });
  // };
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
  const handleLogin = async (e) => {
    e.preventDefault();
    const dataSignIn = {
      email,
      password,
    };
    login(dataSignIn)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        onClose();
        Navigate("/home");
      })
      .catch((error) => {
        console.log("erroe message ", error);
      });
    // console.log("Logging in with:", { username, password });
    // onClose();
  };
  const handleSwitch = () => {
    onClose();
    openRegister();
  };
  return (
    <>
      {show && (
        <section className="login-section font-montserrat">
          <div className="modal-overlay">
            <div className="modal-container">
              <form className="login-modal">
                <TfiClose onClick={onClose} className="close-btn" />
                <button className="google-auth">
                  <FcGoogle size={25} className="google-auth-btn" />
                  <span className="google-auth-text">Sign in with google</span>
                </button>
                <p className="divider">or sign in with email</p>
                {/* <p className='email-label'>email</p> */}
                <input
                  onChange={handleChangeEmail}
                  type="email"
                  label="email"
                  placeholder="email"
                />
                {/* <p className='email-label'>password</p> */}
                <input
                  onChange={handleChangePassword}
                  type="password"
                  label="password"
                  placeholder="password"
                />
                <div className="remember-section">
                  <div className="remember-content">
                    <input className="remember-btn" type="checkbox" />
                    <span className="remember-text">remember me</span>
                  </div>
                  <p className="forgot-text">forgot password?</p>
                </div>
                <button
                  onClick={handleLogin}
                  className="submit-btn"
                  type="submit"
                >
                  sign in
                </button>
                <p className="notmember-text">
                  Not a member?
                  <Link onClick={handleSwitch} className="signin-link">
                    create account
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

export default Login;

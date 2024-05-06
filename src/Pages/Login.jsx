import React, { useState, useEffect }from 'react';
import { FcGoogle } from "react-icons/fc";
import { TfiClose } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import './login.css'
const Login = ({ show, onClose, openRegister }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
      if (show) {
        document.body.style.overflow = 'hidden';
      }else {
        document.body.style.overflow = 'auto';
      }

      return () => {
        document.body.style.overflow = 'auto';
      } ;
    }, [show]);
  const handleLogin = () => {
  
    console.log('Logging in with:', { username, password });
    onClose(); 
  };
  const handleSwitch = () =>{
    onClose();
    openRegister()
  }
  return (
    <>
            {
      show && (
          <section className='login-section font-montserrat'>
                  <div className='modal-overlay'>
              <div className='modal-container'>
            <form className='login-modal'>
              <TfiClose onClick={onClose} className='close-btn' />
              <button className='google-auth'>
                <FcGoogle size={25} className='google-auth-btn' />
                <span className='google-auth-text'>Sign in with google</span>
              </button>
                <p className='divider'>or sign in with email</p>
              {/* <p className='email-label'>email</p> */}
              <input type='email' placeholder='email' />
              {/* <p className='email-label'>password</p> */}
              <input type='password' placeholder='password' />
              <div className='remember-section'>
                <div className='remember-content'>
                  <input className='remember-btn' type='checkbox'/>
                  <span className='remember-text'>remember me</span>
                </div>
                <p className='forgot-text'>forgot password?</p>
              </div>
              <button onClick={handleLogin} className='submit-btn' type='submit'>sign in</button>
              <p className='notmember-text'>Not a member?<Link onClick={handleSwitch} className='signin-link'>create account</Link></p>
            </form>
        </div>
      </div>
          </section>
    )
  }
    </>
  );
}

export default Login;

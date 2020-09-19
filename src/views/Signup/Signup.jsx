import React from "react";
import "./Signup.css";
import Logo from "../../assets/Logo.svg";
import logoDark from "../../assets/Logo-Dark.svg";
import { Link } from "react-router-dom";
import { useStateValue } from "../../states/StateProvider";

function Signup() {
  const [{ darkMode }] = useStateValue();
  return (
    <div className="signup">
      <div className="signup__left">
        <h2>Welcome Back!</h2>
        <p>
          To keep connected with us please login with <br /> your personal info
        </p>
        <Link to="/login" className="signup__signupbtn">
          Sign In
        </Link>
      </div>
      <div className="signup__right">
        <Link to="/" className="signup__brand">
          <img
            src={darkMode ? logoDark : Logo}
            className="signup__logo"
            alt="eventhut logo"
          />
        </Link>
        <div className="signup__content">
          <h3>Create Account</h3>
          <form className="signup__form">
            <div className="signup__item">
              <span>Your Full Name</span>
              <input type="email" placeholder="Taran Arora" />
            </div>
            <div className="signup__item">
              <span>Your Email</span>
              <input type="email" placeholder="itstaranarora@gmail.com" />
            </div>
            <div className="signup__item">
              <span>Password</span>
              <input type="password" placeholder="8+ characters" />
            </div>
            <Link to="/" className="signup__button">
              Sign Up
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;

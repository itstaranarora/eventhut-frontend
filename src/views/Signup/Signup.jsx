import React, { useState } from "react";
import "./Signup.css";
import Logo from "../../assets/Logo.svg";
import logoDark from "../../assets/Logo-Dark.svg";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../states/StateProvider";
import {registerUser} from "api"
// import { Signup as NewUser } from "../../api";

function Signup(props) {
  const [{ darkMode }] = useStateValue();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // NewUser(username, password, email);
    registerUser({username,password,email}).then(res => console.log(res)).catch(err => console.log(err))
    history.push("/");
  };

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
              <span>Your Username</span>
              <input
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Taran Arora"
              />
            </div>
            <div className="signup__item">
              <span>Your Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="itstaranarora@gmail.com"
              />
            </div>
            <div className="signup__item">
              <span>Password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="8+ characters"
              />
            </div>
            <button onClick={handleSubmit} className="signup__button">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;

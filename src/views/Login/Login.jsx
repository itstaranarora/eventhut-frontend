import React,{useState} from "react";
import "./Login.css";
import Logo from "../../assets/Logo.svg";
import logoDark from "../../assets/Logo-Dark.svg";
import { Link } from "react-router-dom";
import { useStateValue } from "../../states/StateProvider";
import {loginUser, createEvent}  from "api"

function Login() {
  const [{ darkMode }] = useStateValue();
  const [identifier, setIdentifier] = useState("")
  const [password,setPassword] = useState("")

  const handleSubmit = () => {
    // loginUser({identifier, password})
    createEvent({name: "Hello"})
    console.log("hello")
  }

  return (
    <div className="login">
      <div className="login__left">
        <Link to="/" className="login__brand">
          <img
            src={darkMode ? logoDark : Logo}
            className="login__logo"
            alt="eventhut logo"
          />
        </Link>
        <div className="login__content">
          <h3>Sign in to Eventhut</h3>
          <form className="login__form">
            <div className="login__item">
              <span>Your Email</span>
              <input type="email" value={identifier} onChange={e => setIdentifier(e.target.value)}  placeholder="itstaranarora@gmail.com" />
            </div>
            <div className="login__item">
              <span>Password</span>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="8+ characters" />
            </div>
            <input className="login__button" type="button" value="Sign In" />
          </form>
        </div>
      </div>
      <div className="login__right">
        <h2>Hello Friend!</h2>
        <p>Enter your personal details and start your journey with us</p>
        <button onClick={handleSubmit} className="login__signupbtn">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Login;

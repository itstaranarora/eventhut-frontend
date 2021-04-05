import React, { useEffect, useState } from "react";
import "./Login.css";
import Logo from "../../assets/Logo.svg";
import logoDark from "../../assets/Logo-Dark.svg";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../states/StateProvider";
import CircularProgress from "@material-ui/core/CircularProgress";
import { setLocalStorage, getJwt, saveUserAndPassword, loginUser } from "api";

function Login() {
  const [{ darkMode }, dispatch] = useStateValue();
  const [identifier, setIdentifier] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    loginUser({ identifier, password })
      .then((res) => {
        setLocalStorage(res.data.jwt);
        saveUserAndPassword(identifier, password);
        dispatch({
          type: "SET_USER",
          user: res.data.user,
        });
        history.push("/dashboard");
      })
      .catch((err) => {
        if (err?.response?.status === 400) {
          alert("Invalid username or password");
          setLoading(false);
        }
      });
  };

  useEffect(() => {
    if (getJwt()) {
      history.push("/dashboard");
    }
  }, []);

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
              <input
                type="email"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="itstaranarora@gmail.com"
              />
            </div>
            <div className="login__item">
              <span>Password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="8+ characters"
              />
            </div>
            <button onClick={handleSubmit} className="login__button">
              {loading ? <CircularProgress color="#fff" /> : "Login"}
            </button>
          </form>
        </div>
      </div>
      <div className="login__right">
        <h2>Hello Friend!</h2>
        <p>Enter your personal details and start your journey with us</p>
        <Link to="/signup" className="login__signupbtn">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;

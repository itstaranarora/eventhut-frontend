import React from "react";
import { useStateValue } from "../../states/StateProvider";
import Logo from "../../assets/Logo.svg";
import logoDark from "../../assets/Logo-Dark.svg";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [{ darkMode }] = useStateValue();

  return (
    <header className="container header">
      <Link to="/" className="header__brand">
        <img
          src={darkMode ? logoDark : Logo}
          className="header__logo"
          alt="eventhut logo"
        />
      </Link>
      <div className="header__items">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </header>
  );
}

export default Header;

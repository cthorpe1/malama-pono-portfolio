import React, { useContext } from "react";
import { AuthContext } from "../../Auth";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/nav-logo.png";
import { logout } from "../../helpers/auth-helpers";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className={classes.Navbar}>
      <div className={classes.LogoContainer}>
        <img src={Logo} alt="Logo Here" />
        <h3>Malama Pono Autism Center</h3>
      </div>
      <ul className={classes.Links}>
        <li>
          <Link to="/" className={classes.Link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/admin" className={classes.Link}>
            Admin
          </Link>
        </li>
        {currentUser ? (
          <li onClick={logout} className={classes.Link}>Logout</li>
        ) : null}
      </ul>
    </div>
  );
};

export default Navbar;

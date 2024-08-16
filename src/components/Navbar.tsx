import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>

      <div className="navbar-account">
        <p>{user?.displayName}</p>
        <img src={user?.photoURL || ""} />
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="navbar">
      <div className="navbar-links">
        <Link to="/">Home</Link>
        {!user ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/createpost">Create Post</Link>
        )}
      </div>

      <div className="navbar-account">
        {user && (
          <>
            <p>{user?.displayName}</p>
            <img src={user?.photoURL || ""} />
            <button onClick={signUserOut} className="log-out-button">
              Log Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

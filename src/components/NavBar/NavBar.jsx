import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/apiRequest";

const NavBar = ({ user, axiosJWT }) => {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    if (e !== false) {
      logoutUser(user?.accessToken, dispatch, axiosJWT);
    } else {
    }
  };

  return (
    <div className="NavBar">
      <Link className="left-nav" to="/">
        <div className="col1"></div>
        <div className="col2"></div>
      </Link>
      <div className="right-nav">
        {!user ? (
          <Link className="link" to="/login">
            <div className="button">Sign in</div>
          </Link>
        ) : (
          <div className="loggedin">
            <Link className="link" to="/profile">
              <div className="button">Profile</div>
            </Link>
            <Link className="link" to="/">
              <div className="button" onClick={(e) => handleLogout(true)}>
                Logout
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

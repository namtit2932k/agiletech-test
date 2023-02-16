import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
    };
    loginUser(newUser, dispatch, navigate);
  };

  return (
    <section className="login-container">
      <Link className="left-nav" to="/">
        <div className="col1"></div>
        <div className="col2"></div>
      </Link>
      <div className="login-title"> Sign in</div>
      <form onSubmit={handleLogin} className="login-form">
        <label>Username</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <button type="submit"> Sign in </button>
      </form>
    </section>
  );
};

export default Login;

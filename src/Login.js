import React from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useNavigate } from "react-router-dom";
import "./css/login.css";

export default function Login() {
  const { login, register, user } = useKindeAuth();
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const onRedirectCallback = (user, app_state) => {
    console.log({ user, app_state });
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Welcome, how would you like to continue?</h1>
      <div>
        <button className="register-button" onClick={register} type="button">
          Register
        </button>
      </div>
      <div>
        <button className="login-button" onClick={login} type="button">
          Log In
        </button>
      </div>
      <div>
        <button className="back-button" onClick={goBack} type="button">
          Back
        </button>
        <h3>{user ? user : null}</h3>
      </div>
    </div>
  );
}

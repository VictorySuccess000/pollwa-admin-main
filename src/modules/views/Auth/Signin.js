import React from "react";
import { ReactComponent as Logo } from "../../../images/icons/5MINBOT.svg";
import "./Signin.css";

const SignIn = () => {
  return (
    <>
      <div>
        <Logo className="logo" />
        <div className="Leftbody ">
          <p className="subText">PLEASE PROVIDE ADMIN DETAILS BELOW</p>
          <form>
            <div className="loginFormEmail">
              <label className="emailText">Email *</label>
              <input
                className="emailInput"
                placeholder="jane@doe.com"
              ></input>
            </div>
            <div className="loginFormPassword">
              <label className="passwordText">
                Password *
              </label>
              <input
                className="passwordInput"
                placeholder="*****************"
              ></input>
            </div>
            <div className="loginFormButton">
              <a
                className="loginBtn"
                style={{ backgroundColor: "#CC2B7C" }}
                href="/clients"
              >Login</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;

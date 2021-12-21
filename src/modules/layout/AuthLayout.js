import React from "react";
import { ReactComponent as AuthImage } from "../../images/icons/5mins_auth.svg";
import "./AuthLayout.css";

const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="AuthRoot">
        <div className="AuthRootLeft">{children}</div>
        <div className="AuthRootRight">
          <AuthImage className="AuthRightImg" />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;

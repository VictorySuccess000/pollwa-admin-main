import React from "react";
import SideBar from "../components/navs/sidebar";
import { ReactComponent as AdminUser } from "../../images/icons/5mins_user.svg";
import "./MainLayout.css";

const MainLayout = ({ title, children }) => {
  return (
    <>
      <div className="fullScreen">
        {/* Side bar */}
        <div className="LeftScreen">
          <SideBar />
        </div>
        <div className="RightScreen">
          <div className="RightScreenTop">
            <div className="wFull">
              <div className="wAllFull">
                <p className="wFullText">{title && title}</p>
                <AdminUser className="wFullImg" />
              </div>
            </div>
          </div>
          <div className="RightScreenBottom">{children}</div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;

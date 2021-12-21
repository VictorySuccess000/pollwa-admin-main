import React from "react";
import { ReactComponent as AdminUser } from "../../../images/icons/5mins_user.svg";
import "./Settings.css";

const Settings = () => {
  return (
    <>
      <div className="settingRoot">
        <div className="settingRootTop">
          <div className="settingRootTopBackground">
            <p className="settingRootTopText">
              My profile
            </p>
          </div>
          <div className="settingRootMediumImgArea">
            <AdminUser className="settingRootMediumImg" />
          </div>

          <div className="settingRootBottomArea">
            <div className="settingRootBottomOld">
              <label>Old Password *</label>
              <input
                className="onInput"
                placeholder="****************"
                type="password"
              ></input>
            </div>
            <div className="settingRootBottomOld">
              <label>New Password *</label>
              <input
                className="onInput"
                type="password"
                placeholder="****************"
              ></input>
            </div>
          </div>
          <div className="lastBottomArea">
          <button className="lastBottomAreaBtn">
            Change Password
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;

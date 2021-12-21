import React from "react";
import "./style.css";
import { ReactComponent as ComingSoon } from "../../../../images/icons/coming_soon.svg";

const mainRight = () => {
  return (
    <>
      <div className="h-8"></div>
      <div className="BotDesignRootEmail">
        <div className="BotDesignRootContentEmail">
          <ComingSoon className="BotDesignRootContentImgEmail" />
          <p className="BotDesignRootContentTextEmail">
            Please check back for future updates
          </p>
        </div>
      </div>
    </>
  );
};

export default mainRight;

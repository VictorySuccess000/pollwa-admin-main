import React from "react";
import { ReactComponent as ComingSoon } from "../../../../images/icons/coming_soon.svg";
import "./BotDesign.css";

const BotTemplate = () => {
  return (
    <>
      <div className="BotDesignRoot"  >
        <div className="BotDesignRootContent">
          
          <ComingSoon className="BotDesignRootContentImg"/>
          <p className="BotDesignRootContentText">
          Please check back for future updates
          </p>
        </div>
      </div>
    </>
  );
};

export default BotTemplate;

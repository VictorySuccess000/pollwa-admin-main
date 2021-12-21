import React from "react";
import MainLeft from "./mainLeft";
import MainRight  from "./DraftmainRight";

import "./style.css";

const BotBuilder = () => {
  return (
    <>
      <div className="h-8"></div>
      <div className="emailingSystem">
        <MainLeft />
        <MainRight />
      </div>
    </>
  );
};

export default BotBuilder;

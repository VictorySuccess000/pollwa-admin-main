import React from "react";
import BotHero from "../botHero";
import { useHistory } from "react-router-dom";
import "./BotTemplate.css";

const BotDesign = () => {
  let history = useHistory();
  function handleClick() {
    history.push("/bot-template/dynamic-reply");
  }

  return (
    <>
      <div className="botMainbody">
        <div className="spaceheight"></div>
        <BotHero />
        <div className="botMainbodyMedium">
          <div className="botMainbodyMediumData">
            <p className="botMainbodyMediumDataText">
              Please fill in the fields below
            </p>
          </div>
          <div className="inputTitle">
            <input
              className="inputTitleReal"
              placeholder="Template Title *"
            ></input>
          </div>
          <div className="inputCategory">
            <input
              className="inputTitleReal"
              placeholder="Template Category *"
            ></input>
          </div>
          <div className="inputChannel">
            <input
              className="inputTitleReal"
              placeholder="Template Channel *"
            ></input>
          </div>
          <div className="buildBtnArea">
            <a
              href="/"
              className="buildBtn"
              style={{ backgroundColor: "#CC2B7C" }}
              onClick={handleClick}
            >
              Build Template
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BotDesign;

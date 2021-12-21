import React from "react";
import { ReactComponent as Bg } from "../../../images/icons/5mins_aBG.svg";
import "./BuildBot/BotTemplate.css";

const BotHero = () =>{
    return(
        <>
        <div className="botTopLeft">
          <div className="botTopLeftImgArea">
            <Bg className="botTopLeftImg" />
          </div>
          <div className="botTopLeftTextArea">
            <p className="botTopLeftTextTitle">Hello, Admin</p>
            <p className="botTopLeftTextSubTitle">
              Here you can create a bot template. Lets Do It!.{" "}
            </p>
          </div>
        </div>
        </>
    )
}


export default BotHero;
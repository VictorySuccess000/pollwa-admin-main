import React from "react";
import { ReactComponent as Bg } from "../../../images/icons/5mins_aBG.svg";


const BotHero = () =>{
    return(
        <>
        <div className="mx-32 h-48 bg-mountainmist-800 rounded-xl  flex">
          <div className="w-2/6">
            <Bg className="h-full w-full " />
          </div>
          <div className="w-4/6 bg-white p-4">
            <p className="text-2xl mb-2">Hello, Admin</p>
            <p className="text-base text-mountainmist-400">
              Here you can create a bot template. Lets Do It!.{" "}
            </p>
          </div>
        </div>
        </>
    )
}


export default BotHero;
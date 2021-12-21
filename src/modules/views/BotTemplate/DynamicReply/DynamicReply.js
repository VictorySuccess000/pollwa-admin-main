import React from "react";
import BotHero from "../botHero";
import { useHistory } from "react-router-dom";

import { ReactComponent as SettingsReturn } from "../../../../images/img/svgs/4-Create bot Action b/settingreturn.svg";
const DynamicReply = () => {
  let history = useHistory();
  function handleClick() {
    history.push("/bot-template");
  }

  function gotoBotBuilder() {
    history.push("/bot-template/emailing-system");
  }

  return (
    <>
      <div className=" bg-alabaster-500 	">
        <div className="h-8"></div>
        <BotHero />

        <div className="mx-32 mt-12 bg-white rounded-xl pb-24 mb-12 ">
          <div className="bg-mountainmist-800 w-full rounded-lg h-16 pt-4 pl-8">
            <p className="text-xl font-normal">Incoming Message Routing </p>
          </div>
          <div className="bg-white">
            <div className="flex items-center mt-4 ">
              <SettingsReturn className="h-8 w-8 mr-4 ml-4" />
              <p>Default Route</p>
            </div>
            <div className="ml-16 mt-4 flex">
              <div>
                <p>1. Incoming message </p>
                <input
                  placeholder=""
                  className="rounded-xl border-1 h-8 mt-2"
                />
              </div>
              <div className="ml-8">
                <p className="text-cerise-500">Bot Reply </p>
                <input
                  placeholder=""
                  className="rounded-xl border-1 h-8 mt-2"
                />
              </div>
              <div className="ml-8">
                <p>Reply </p>
                <input
                  placeholder=""
                  className="rounded-xl border-1 h-8 mt-2 p-2 focus:outline-none"
                />
              </div>
              <div className="ml-8">
                <p className="text-cerise-500">Than go to </p>
                <input
                  placeholder=""
                  className="rounded-xl border-1 h-8 mt-2"
                />
              </div>
            </div>
            <div className="mt-8 ml-16">
              <p className="rounded-2xl border-2 w-32  border-dashed flex items-center cursor-pointer justify-center border-black h-8 mt-2 py-2" onClick={
                () => alert("No backend yet")
              }>
                +Add Route
              </p>
            </div>

            <div className="mt-8">
              <div className="float-right">
                <button className="bg-black px-6 mr-4 text-white py-1 rounded-xl" onClick={() => handleClick()}>
                  Back
                </button>
                <button className="bg-cerise-500 mr-4 px-6 text-white py-1 rounded-xl" onClick={()=> gotoBotBuilder()}>
                  Next Steps
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicReply;

import React from "react";
import {  NavLink } from "react-router-dom";
import "./style.css";
import { ReactComponent as DPen } from "../../../../images/icons/dpen.svg";
import { ReactComponent as DTrash } from "../../../../images/icons/dtrash.svg";
// const emailList = () => {
//   alert("OK");
// };
const mainLeft = ({ fromHeader = false, hide }) => {
  return (
    <>
      <div className="h-8"></div>
      <div className="mainRoot">
        <div className="newMailBtnArea">
          <button className="newMailBtn">New Mail</button>
        </div>
        <aside className="sidebar">
          <ul className="listMain">
            <li className="sidebarMain">
              <NavLink
                className="sidebarMainClients"
                onClick={() => (fromHeader ? hide() : null)}
                activeClassName="active-link"
                to="/Sent"
              >
                <div
                  className="sidebarMainClientsMainMail"
                  style={{ backgroundColor: "#F4F5FA" }}
                >
                  <DTrash className="bottomToolDeleteMail" />
                </div>
                <p className="sidebarMainClientsTextMail">Sent</p>
              </NavLink>
            </li>
            <li className="sidebarMain">
              <NavLink
                className="sidebarMainClients"
                onClick={() => (fromHeader ? hide() : null)}
                activeClassName="active-link"
                to="/Drafts"
              >
                <div
                  className="sidebarMainClientsMainMail"
                  style={{ backgroundColor: "#F4F5FA" }}
                >
                  <DPen className="bottomToolEditMail" />
                </div>
                <p className="sidebarMainClientsTextMail">Drafts</p>
              </NavLink>
            </li>
            <li className="sidebarMain">
              <NavLink
                className="sidebarMainClients"
                onClick={() => (fromHeader ? hide() : null)}
                activeClassName="active-link"
                to="/Trash"
              >
                <div
                  className="sidebarMainClientsMainMail"
                  style={{ backgroundColor: "#F4F5FA" }}
                >
                  <DTrash className="bottomToolDeleteMail" />
                </div>
                <p className="sidebarMainClientsTextMail">Trash</p>
              </NavLink>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
};

export default mainLeft;

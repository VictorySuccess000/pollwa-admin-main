import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../../images/icons/5MINBOT.svg";
import "./sidebar.css";

const SideBar = ({ fromHeader = false, hide }) => {
  return (
    <>
      <div className="sidebarRoot" style={{ height: "100vh" }}>
        <div className="sidebarRootTop"></div>
        <div>
          <Logo className="logo" />
          <p className="subText">Admin Menu</p>
          <aside className="sidebar">
            <ul className="listMain">
              <li className="sidebarMain">
                <NavLink
                  className="sidebarMainClients"
                  onClick={() => (fromHeader ? hide() : null)}
                  activeClassName="active-link"
                  to="/clients"
                >
                  <div
                    className="sidebarMainClientsMain"
                    style={{ backgroundColor: "#F4F5FA" }}
                  >
                    {/* className="mr-3 fill-current " */}
                    <svg
                      width="23"
                      height="21"
                      className="sidebarMainClientsImg"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.557 8.463a3.792 3.792 0 1 0 0-7.583 3.792 3.792 0 0 0 0 7.583ZM19.228 8.464a2.397 2.397 0 1 0 0-4.795 2.397 2.397 0 0 0 0 4.795ZM3.887 8.464a2.397 2.397 0 1 0 0-4.795 2.397 2.397 0 0 0 0 4.795ZM6.248 10.616c-.943-.773-1.798-.67-2.889-.67-1.631 0-2.959 1.32-2.959 2.94v4.76a1.28 1.28 0 0 0 1.282 1.277c3.052 0 2.684.056 2.684-.131 0-3.373-.4-5.846 1.883-8.176Z" />
                      <path d="M12.595 9.963c-1.906-.16-3.562.001-4.99 1.18-2.392 1.916-1.932 4.494-1.932 7.649 0 .834.68 1.526 1.527 1.526 9.2 0 9.566.297 10.111-.911.179-.409.13-.28.13-4.188 0-3.104-2.688-5.256-4.846-5.256ZM19.755 9.945c-1.097 0-1.946-.101-2.889.671 2.265 2.312 1.883 4.617 1.883 8.176 0 .188-.306.131 2.638.131.732 0 1.328-.593 1.328-1.322v-4.714c0-1.622-1.328-2.942-2.96-2.942Z" />
                    </svg>
                  </div>
                  <p className="sidebarMainClientsText">Clients</p>
                </NavLink>
              </li>
              <li className="sidebarMain">
                <NavLink
                  className="sidebarMainClients"
                  onClick={() => (fromHeader ? hide() : null)}
                  activeClassName="active-link"
                  to="/bot-template"
                >
                  <div
                    className="sidebarMainClientsMain"
                    style={{ backgroundColor: "#F4F5FA" }}
                  >
                    {/* className="mr-3 fill-current " */}
                    <svg
                      width="23"
                      height="21"
                      className="sidebarMainClientsImg"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19.36 15.007h-.611v-.772a3.318 3.318 0 0 0-3.314-3.314h-4.182V8.067h1.833c.904 0 1.64-.736 1.64-1.64v-3.98c0-.905-.736-1.64-1.64-1.64H8.188c-.905 0-1.64.735-1.64 1.64v3.98c0 .904.735 1.64 1.64 1.64h1.833v2.854H5.593a3.318 3.318 0 0 0-3.315 3.314v.772H1.64c-.904 0-1.64.736-1.64 1.64v1.907c0 .904.736 1.64 1.64 1.64h2.509c.904 0 1.64-.736 1.64-1.64v-1.907c0-.904-.736-1.64-1.64-1.64H3.51v-.772c0-1.148.934-2.082 2.083-2.082h4.428v2.854h-.639c-.904 0-1.64.736-1.64 1.64v1.907c0 .904.736 1.64 1.64 1.64h2.51c.903 0 1.639-.736 1.639-1.64v-1.907c0-.904-.736-1.64-1.64-1.64h-.638v-2.854h4.182c1.148 0 2.082.934 2.082 2.082v.772h-.666c-.904 0-1.64.736-1.64 1.64v1.907c0 .904.736 1.64 1.64 1.64h2.51c.903 0 1.639-.736 1.639-1.64v-1.907c0-.904-.736-1.64-1.64-1.64Z" />
                    </svg>
                  </div>
                  <p className="sidebarMainClientsText">Bot Template</p>
                </NavLink>
              </li>
              <li className="sidebarMain">
                <NavLink
                  className="sidebarMainClients"
                  onClick={() => (fromHeader ? hide() : null)}
                  activeClassName="active-link"
                  to="/bot-design"
                >
                  <div
                    className="sidebarMainClientsMain"
                    style={{ backgroundColor: "#F4F5FA" }}
                  >
                    {/* className="mr-3 fill-current " */}
                    <svg
                      width="23"
                      height="21"
                      className="  sidebarMainClientsImg"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#a)">
                        <path d="M21.655 10.35a.754.754 0 0 0-.068-.041l-1.561-.841-8.658 4.584a.785.785 0 0 1-.736 0L1.975 9.468l-1.562.84a.778.778 0 0 0-.281 1.12L11 17.184l10.868-5.754a.778.778 0 0 0-.213-1.08Z" />
                        <path d="M21.905 15.341a.786.786 0 0 0-.318-.318l-1.561-.84-8.658 4.584a.786.786 0 0 1-.736 0l-8.658-4.584-1.56.84a.786.786 0 0 0 0 1.383l10.213 5.5a.786.786 0 0 0 .745 0l10.215-5.5a.786.786 0 0 0 .318-1.064ZM21.655 5.636a.766.766 0 0 0-.068-.041L11.372.095a.786.786 0 0 0-.744 0L.413 5.595a.778.778 0 0 0-.281 1.12L11 12.47l10.868-5.754a.778.778 0 0 0-.213-1.079Z" />
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path d="M0 0h22v22H0z" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p className="sidebarMainClientsText">Bot Design</p>
                </NavLink>
              </li>
              <li className="sidebarMain">
                <NavLink
                  className="sidebarMainClients"
                  onClick={() => (fromHeader ? hide() : null)}
                  activeClassName="active-link"
                  to="/tooltip-management"
                >
                  <div
                    className="sidebarMainClientsMain"
                    style={{ backgroundColor: "#F4F5FA" }}
                  >
                    {/* className="mr-3 fill-current " */}
                    <svg
                      width="23"
                      height="21"
                      className=" sidebarMainClientsImg"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#a)">
                        <path d="M4.592 9.166H.426a.417.417 0 0 0-.417.417v10c0 .23.187.416.417.416h4.166c.23 0 .417-.186.417-.416v-10a.416.416 0 0 0-.417-.417ZM12.075 0H7.91a.417.417 0 0 0-.417.417v19.166c0 .23.187.417.417.417h4.166c.23 0 .417-.187.417-.417V.417A.417.417 0 0 0 12.075 0ZM19.575 4.166H15.41a.417.417 0 0 0-.417.417v15c0 .23.187.416.417.416h4.166c.23 0 .417-.186.417-.416v-15a.417.417 0 0 0-.417-.417Z" />
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path d="M0 0h20v20H0z" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p className="sidebarMainClientsText">Tooltip Management</p>
                </NavLink>
              </li>
              <li className="sidebarMain">
                <NavLink
                  className="sidebarMainClients"
                  onClick={() => (fromHeader ? hide() : null)}
                  activeClassName="active-link"
                  to="/emailing-system"
                >
                  <div
                    className="sidebarMainClientsMain"
                    style={{ backgroundColor: "#F4F5FA" }}
                  >
                    {/* className="mr-3 fill-current " */}
                    <svg
                      width="23"
                      height="21"
                      className=" sidebarMainClientsImg"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21.984 4.74c0-.026.017-.05.016-.075l-6.714 6.469 6.706 6.262c.004-.044-.008-.09-.008-.135V4.74ZM14.261 12.129l-2.74 2.637a.715.715 0 0 1-.986.008l-2.733-2.547-6.75 6.505c.165.06.34.105.525.105h18.894c.273 0 .53-.083.754-.208l-6.964-6.5Z" />
                      <path d="m11.016 13.262 10.246-9.87a1.552 1.552 0 0 0-.792-.23H1.577c-.377 0-.722.146-.991.37l10.43 9.73ZM0 4.98v12.28c0 .141.032.277.068.407l6.665-6.419L0 4.98Z" />
                    </svg>
                  </div>
                  <p className="sidebarMainClientsText">Emailing System</p>
                </NavLink>
              </li>
              <li className="sidebarMain">
                <NavLink
                  className="sidebarMainClients"
                  onClick={() => (fromHeader ? hide() : null)}
                  activeClassName="active-link"
                  to="/pkgs-subscriptions"
                >
                  <div
                    className="sidebarMainClientsMain"
                    style={{ backgroundColor: "#F4F5FA" }}
                  >
                    {/* className="mr-3 fill-current " */}
                    <svg
                      width="23"
                      height="21"
                      className="  sidebarMainClientsImg"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.656 10.586a1.172 1.172 0 1 0 2.344 0v-5.86h-2.344v5.86ZM17.656 12.93H8.242a2.346 2.346 0 0 1-2.344-2.344v-5.86H0v11.758h17.656V12.93ZM6.453 17.656l-.39 1.172H4.726V20h8.203v-1.172h-1.336l-.39-1.172H6.452ZM10 2.969h3.516V4.14H10V2.969Z" />
                      <path d="M7.07 0v10.586c0 .647.525 1.172 1.172 1.172h8.568a2.317 2.317 0 0 1-.326-1.172V0H7.07Zm7.617 10H8.829V8.828h5.86V10Zm0-2.344H8.829V6.484h5.86v1.172Zm0-2.343H8.829V1.796h5.86v3.516Z" />
                    </svg>
                  </div>
                  <p className="sidebarMainClientsText">PKGs Subscriptions</p>
                </NavLink>
              </li>
              <li className="sidebarMain">
                <NavLink
                  className="sidebarMainClients"
                  onClick={() => (fromHeader ? hide() : null)}
                  activeClassName="active-link"
                  to="/settings"
                >
                  <div
                    className="sidebarMainClientsMain"
                    style={{ backgroundColor: "#F4F5FA" }}
                  >
                    {/* className="mr-3 fill-current " */}
                    <svg
                      width="23"
                      height="21"
                      className=" sidebarMainClientsImg"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m20.37 12.801-1.93-1.51c.025-.232.046-.504.046-.792 0-.288-.02-.56-.045-.793l1.932-1.51A.946.946 0 0 0 20.6 6.99l-2.007-3.473a.93.93 0 0 0-1.161-.417l-2.278.914a7.807 7.807 0 0 0-1.368-.793L13.441.805A.93.93 0 0 0 12.513 0H8.488a.927.927 0 0 0-.925.798l-.348 2.425a8.05 8.05 0 0 0-1.365.793L3.566 3.1c-.427-.165-.94.02-1.152.41L.404 6.988a.94.94 0 0 0 .228 1.212l1.93 1.51c-.03.294-.046.55-.046.791 0 .24.015.497.046.793L.63 12.803a.947.947 0 0 0-.228 1.206l2.008 3.473a.929.929 0 0 0 1.16.417l2.278-.914c.436.314.894.58 1.367.793l.347 2.415c.057.46.455.807.927.807h4.025c.472 0 .87-.346.927-.798l.347-2.424c.459-.207.908-.469 1.365-.794l2.284.917a.924.924 0 0 0 1.152-.41L20.605 14a.945.945 0 0 0-.234-1.199ZM10.5 14C8.57 14 7 12.43 7 10.5S8.57 7 10.5 7c1.931 0 3.5 1.57 3.5 3.5S12.432 14 10.5 14Z" />
                    </svg>
                  </div>
                  <p className="sidebarMainClientsText">Settings</p>
                </NavLink>
              </li>
              <li className="sidebarMain">
                <Link
                  className="LogoutArea"
                  to="/"
                >
                  <div className="LogoutAreaText">
                    <p className="">Logout</p>
                  </div>
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
};

export default SideBar;

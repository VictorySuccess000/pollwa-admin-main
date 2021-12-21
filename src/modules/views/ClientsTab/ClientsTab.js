import React from "react";
import { ReactComponent as Search } from "../../../images/icons/5mins_search.svg";
import { useHistory } from "react-router-dom";
import "./ClientsTab.css";

const ClientsTab = () => {
  const history = useHistory();

  const TableHeader = ({ title }) => (
    <th className="tabletrlist">
      <p className="tabletrlistData">{title}</p>
    </th>
  );
  const TableData = ({ title }) => (
    <td className="tableDatalist">
      <p className="tableDatalistData">{title}</p>
    </td>
  );

  return (
    <div className="RightScreenBottombody">
      <div className="RightScreenBottomInputArea">
        <div>
          <div class="RightScreenBottomSearch">
            <span class="RightScreenBottomSearchImg">
              <Search />{" "}
            </span>
            <input
              className="RightScreenBottomSearchInput"
              placeholder="Search clients"
            />
          </div>
        </div>
        <div className="RightScreenBottomType">
          <div className="RightScreenBottomTypeArea">
            <select className="RightScreenBottomTypeSelect">
              <option className="RightScreenBottomTypeOption"> Subscription Type</option>
            </select>
          </div>
        </div>
      </div>

      <p className="subTableText">
        Below are the list of your clients
      </p>

      <div className={"tableData"}>
        <table className="tableFull">
          <thead>
            <tr className={"tableFullTr"}>
              <TableHeader title={"CLIENT NAME"} />
              <TableHeader title={"DATE OF SUBSCRIPTION"} />
              <TableHeader title={"DAYS LEFT"} />
              <TableHeader title={"COMPANY NAME"} />
            </tr>
          </thead>
          <tbody>
            {Array(10)
              .fill(0)
              .map((item) => (
                <tr
                  className={"tabletrData"}
                  onClick={(e) => history.push("/clients/1")}
                >
                  <TableData title={"Geek"} />
                  <TableData title={"September 1st, 2021"} />
                  <TableData title={"3 Days"} />
                  <TableData title={"Geek Inc."} />
                </tr>
              ))}
          </tbody>
        </table>

        <div className={"tableBtnArea"}>
          <button className="tableBtn">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientsTab;

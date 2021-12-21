import React from "react";
import { ReactComponent as Search } from "../../../images/icons/5mins_search.svg";
import { ReactComponent as PkgHeader } from "../../../images/icons/pkgheader.svg";
import { ReactComponent as CheckMark } from "../../../images/icons/check_mark.svg";
import { ReactComponent as DPen } from "../../../images/icons/dpen.svg";
import { ReactComponent as DTrash } from "../../../images/icons/dtrash.svg";
import "./PkgsSubscription.css";

const PkgsSubcripion = () => {
  const docData = [
    {
      pkg_name: "n",
      pkg_price: "",
      pkg_feature: ["Basic Features", "Conditional logic", "A/B Test"],
    },
    {
      pkg_name: "n",
      pkg_price: "",
      pkg_feature: [
        "Basic Features",
        "Conditional logic",
        "A/B Test",
        "Conditional logic",
      ],
    },
    {
      pkg_name: "n",
      pkg_price: "",
      pkg_feature: [
        "Basic Features",
        "Conditional logic",
        "A/B Test",
        "Conditional logic",
        "A/B Test",
        "Conditional logic",
      ],
    },
    {
      pkg_name: "n",
      pkg_price: "",
      pkg_feature: [
        "Basic Features",
        "A/B Test",
        "Conditional logic",
        "A/B Test",
        "Conditional logic",
      ],
    },
  ];
  return (
    <>
      <div className="PkgsSubscriptionRoot">
        <div>
          <div className="PkgsSubscriptionData">
            <div class="PkgsSubscriptionSubData">
              <div class="PkgsSubscriptionSearchInput">
                <span class="PkgsSubscriptionSearchInputIcon">
                  <Search />{" "}
                </span>
                <input
                  className="PkgsSubscriptionSearchReal"
                  placeholder="Search packages"
                />
              </div>
            </div>
            <button className="PkgsSubscriptionPassBtn">
              Create New Password
            </button>
          </div>
        </div>

        <div className="PkgsSubscriptionBtmData">
          {docData.map((item, key) => {
            return (
              <div className="PkgsSubscriptionBtmSubData">
                <div className="PkgsSubscriptionBtmSubDataOne">
                  <PkgHeader className="PkgsSubscriptionBtmSubDataOneImg" />
                  <div className="PkgsSubscriptionBtmTopText">
                    <div>
                      <p className="textOne">Name:</p>
                      <p className="textTwo">Small</p>
                    </div>
                    <div>
                      <p className="textOnePrice">Price:</p>
                      <div className="textTwoPrice">
                        <p className="textTwoPriceCost">$ 50 </p>

                        <p className="textTwoPriceTitle"> / month</p>
                      </div>
                    </div>
                  </div>
                  {item.pkg_feature.map((item, key) => (
                    <>
                      <div
                        className="checklist"
                        style={{ marginBottom: ".2rem" }}
                      >
                        <p className="checklistflex">
                          <CheckMark className="checklist" />
                          {item}
                        </p>
                      </div>
                    </>
                  ))}
                  <div className="bottomTool">
                    <DPen className="bottomToolEdit" />
                    <DTrash className="bottomToolDelete" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PkgsSubcripion;

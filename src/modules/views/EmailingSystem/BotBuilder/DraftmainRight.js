import React from "react";
import "./style.css";
// import { ReactComponent as ComingSoon } from "../../../../images/icons/coming_soon.svg";

class DraftmainRight extends React.Component {
  constructor() {
    super();
    this.state = {
      tooltipArr: [{ name: "", content: "" }]
    }
  }
  addtooltip = () =>{
    const {tooltipArr} = this.state;
    tooltipArr.push({name: "", content: ""});
    console.log(tooltipArr);
    this.setState({tooltipArr});
  }
  render() {
    return (
      <>
        <div className="BotDesignRoot"  style={{width:"100%"}}>
          <div className="BotDesignRootContent">
            <div className="oneTooltip">
              <div className="tooltipName">
                <p>Email Name</p>
              </div>
              <div className="tooltipcontent">
                <p>Email Content</p>
              </div>
            </div>
            {
              this.state.tooltipArr.map(e =>
                <div className="oneTooltip">
                  <div className="tooltipName">
                    <input
                      className="TooltipInput"
                      placeholder="Email Name"
                    />
                  </div>
                  <div className="tooltipcontent">
                    <input
                      className="TooltipInput"
                      placeholder="Email Content"
                    />
                  </div>
                </div>)
            }
            <div className="oneTooltip">
              <div className="tooltipName">
                <button
                  className="addemailBtn"
                  onClick={this.addtooltip}
                ><i className="fa fa-plus-square"/>&nbsp;&nbsp; Add New Email</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default DraftmainRight;

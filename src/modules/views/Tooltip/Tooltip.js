// import React from "react";
// import { Link } from "react-router-dom";
// // import { ReactComponent as ComingSoon } from "../../../images/icons/coming_soon.svg";
// import { ReactComponent as Search } from "../../../images/icons/5mins_search.svg";
// import { ReactComponent as PkgHeader } from "../../../images/icons/tooltip_bg.svg";
// import { ReactComponent as DPen } from "../../../images/icons/dpen.svg";
// import {ReactComponent as DTrash} from "../../../images/icons/dtrash.svg"


// const Tooltip = () => {
//   const docData = [
//     {
//       pkg_name: "Create a bot",
//       pkg_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve",
//     },
//     {
//       pkg_name: "Delete a bot",
//       pkg_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve",
//     },
//   ]
//   return (
//     <>
//       <div className=" bg-alabaster-500 pb-16 pt-8">
//         <div>
//           <div className="flex justify-between mx-8 items-center ">
//             <div class="p-2">
//               <div class="relative mb-3 w-full flex flex-wrap ">
//                 <span class="absolute z-10 py-3 pl-3 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
//                   <Search />{" "}
//                 </span>
//                 <input
//                   className="bg-white px-12 py-4 text-sm border-0 dPkgsCard outline-none placeholder-gray-500 bgInput"
//                   placeholder="Search tooltip"
//                 />
//               </div>
//             </div>
//             <button className="bg-cerise-500 shadow h-12 px-4 rounded text-white">
//               Create New Tooltip
//             </button>
//           </div>
//         </div>

//         <div className="flex flex-wrap">
//           {docData.map((item, key) => {
//             return (
//               <div className="mx-8 mt-8">
//                 <div className="bg-white h-96 shadow-lg w-72 dPkgsCard relative">
//                   <PkgHeader className="w-full h-12" />
//                   <div className="flex mx-8 mt-4 mb-2">
//                     <div>
//                       <p className="mr-20 text-mountainmist-500">Name:</p>
//                       <p className="text-base font-normal  mt-2">{item.pkg_name}</p>
//                     </div>
//                   </div>
//                   <div className="flex mx-8 mt-4 mb-2">
//                     <div>
//                       <p className="mr-20 text-mountainmist-500">Text:</p>
//                       <p className="text-base font-normal  mt-2">{item.pkg_text}</p>
//                     </div>
//                   </div>


//                   <div className="flex  mx-8 mb-4 absolute bottom-0">
//                     <DPen className="mr-4 h-10 w-12"/>
//                     <DTrash className=" h-10 w-10"/>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//           <div className="border-2 border-dashed h-96 w-72 rounded-xl relative mt-8 mx-8 flex items-center">
//             <Link className="mx-auto text-xl font-semibold text-gray-400 "
//             to="/tooltip-management/create">
//               + Add Tooltip 
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Tooltip;

import React, { Component } from "react";
// import { ReactComponent as ComingSoon } from "../../../images/icons/coming_soon.svg";
import "../BotDesign/BuildBot/BotDesign.css";


class BotTemplate extends Component {
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
        <div className="BotDesignRoot"  >
          <div className="BotDesignRootContent">
            <div className="oneTooltip">
              <div className="tooltipName">
                <p>Tooltip Name</p>
              </div>
              <div className="tooltipcontent">
                <p>Tooltip Text and Content</p>
              </div>
            </div>
            {
              this.state.tooltipArr.map(e =>
                <div className="oneTooltip">
                  <div className="tooltipName">
                    <input
                      className="TooltipInput"
                      placeholder="Tooltip Name"
                    />
                  </div>
                  <div className="tooltipcontent">
                    <input
                      className="TooltipInput"
                      placeholder="Tooltip Text and Content"
                    />
                  </div>
                </div>)
            }
            <div className="oneTooltip">
              <div className="tooltipName">
                <button
                  className="addBtn"
                  onClick={this.addtooltip}
                >+&nbsp;Add Tooltip</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default BotTemplate;
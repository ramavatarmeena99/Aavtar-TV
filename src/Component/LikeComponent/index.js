// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import SideNavigation from "../SideNevigation";
// import Style from "./index.module.css";
// import { Navigations } from "../../Data";

// export default function LikeComponent() {
//   const Navigate = useNavigate();
//   // const tagHandler = (item) => {
//   //   setSelectedId(item.id);

//   //   // set tab index
//   //   localStorage.setItem("tabIndex", item.id);
//   // };
//   const tabIndex = parseInt(localStorage.getItem("tabIndex"));

//   const [selectedId, setSelectedId] = useState(tabIndex || 1);
//   const tabHandler = (item) => {
//     // Navigate(`/${item.route}`);
//     setSelectedId(item.id);
//     localStorage.setItem("tabIndex", item.id);
//   };
//   return (
//     <div>
//       <div className={Style.main}>
//         <div className={Style.left}>
//           {Navigations.map((item, index) => {
//             const isActiveTab = selectedId === item.id;

//             return (
//               <div
//                 onClick={() => tabHandler(item)}
//                 key={index}
//                 style={isActiveTab ? activeCss : {}}
//                 className={Style.tabColor}
//               >
//                 <React.Fragment key={index}>
//                   <SideNavigation icon={item.icon} title={item.title} />
//                 </React.Fragment>
//               </div>
//             );
//           })}
//         </div>
//         <div className={Style.right}></div>
//       </div>
//     </div>
//   );
// }

// let activeCss = {
//   backgroundColor: "black",
// };

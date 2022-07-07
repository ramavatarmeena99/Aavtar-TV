// import React from "react";
// import Style from "./index.module.css";

// export default function SideNavigation(props) {
//   const Icon = props.icon;

//   return (
//     <div className={Style.sideNavi}>
//       <div className={Style.topBanner}>
//         <Icon className={Style.icon} />
//       </div>
//       <p className={Style.title}>{props.title}</p>
//     </div>
//   );
// }

import React from "react";
import Style from "./index.module.css";

export default function SideNavigation(props) {
  const Icon = props.icon;

  return (
    <div className={Style.sideNavi}>
      <div className={Style.topBanner}>
        <Icon className={Style.icon} />
      </div>
      <p className={Style.title}>{props.title}</p>
    </div>
  );
}

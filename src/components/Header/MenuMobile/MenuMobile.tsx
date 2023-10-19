"use client";

import React, { useContext } from "react";
import { ThemeModeContext } from "@/context/ThemeModeContext";
import Image from "next/image";

export const MenuMobile = () => {
  const { theme, toggleTheme } = useContext(ThemeModeContext);

  return (
    <>
      <header className={`responsive s primary fixed ${theme}`}>
        <nav>
          <div className={"absolute left-align"}>
            <button onClick={toggleTheme} className="circle transparent">
              {theme === "dark" ? <i>dark_mode</i> : <i>light_mode</i>}
            </button>
          </div>
          <a href={"/"} className="center-align max">
            <Image width={80} height={80} src="/stw_1.png" alt={"STW icon"} />
          </a>
        </nav>
      </header>
    </>
  );
};

/////////////////////////////////

// import Image from "next/image";

// export const MenuMobile = () => {
//   return (
//     <>
//       <header className={`responsive s primary fixed`}>
//         <nav>
//           <div className={"absolute left-align"}>
//             <button className="circle   transparent">
//               <i>menu</i>
//             </button>
//           </div>

//           <a href={"/"} className="center-align max">
//             <Image width={80} height={80} src="/stw_1.png" alt={"STW icon"} />
//           </a>
//         </nav>
//       </header>
//     </>
//   );
// };

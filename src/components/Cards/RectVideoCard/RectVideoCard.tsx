"use client";

import React, { useRef, useState } from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import Image from "next/image";
import Drawer from "./Drawer";

export const RectVideoCard = () => {
  const [modal, setModal] = useState(false);

  const playerRef = useRef<any>(null);

  return (
    <>
      <div className={"s12 m4 padding"}>
        <article
          onClick={() => setModal(true)}
          style={{ height: "190px", cursor: "pointer" }}
          className="no-padding no-elevate"
        >
          <Image
            className="responsive"
            src="/Component_5.png"
            width={110}
            height={50}
            alt=""
          />
          <div className="absolute bottom left right padding bottom-shadow white-text">
            <div>
              <div className={"row center-align"}>
                <Image
                  width={80}
                  height={80}
                  src={"/gridicons_play.svg"}
                  alt={""}
                />
              </div>
              <div className={"row"}>
                <p className="max">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>

      <Drawer
        style={{ width: "800px" }}
        className={"modal"}
        open={modal}
        close={() => {
          if (playerRef.current) {
            playerRef.current.load();
          }
          setModal(false);
        }}
      >
        <Player
          ref={playerRef}
          playsInline
          poster="/assets/poster.png"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />
      </Drawer>
    </>
  );
};

// "use client";

// import { useRef, useState } from "react";
// import "node_modules/video-react/dist/video-react.css";
// import { Player, PlayerReference } from "video-react";
// import Image from "next/image";
// import Drawer from "./Drawer";

// export const RectVideoCard = () => {
//   const [modal, setModal] = useState(false);

//   const play = useRef<PlayerReference>();

//   return (
//     <>
//       <div className={"s12 m4 padding"}>
//         <article
//           onClick={() => setModal(true)}
//           style={{ height: "190px", cursor: "pointer" }}
//           className="no-padding no-elevate "
//         >
//           <Image
//             className="responsive"
//             src="/Component_5.png"
//             width={110}
//             height={50}
//             alt=""
//           />
//           <div className="absolute bottom left right padding bottom-shadow white-text">
//             <div>
//               <div className={"row center-align"}>
//                 <Image
//                   width={80}
//                   height={80}
//                   src={"/gridicons_play.svg"}
//                   alt={""}
//                 />
//               </div>
//               <div className={"row"}>
//                 <p className="max ">
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry
//                 </p>
//               </div>
//             </div>
//           </div>
//         </article>
//       </div>

//       <Drawer
//         style={{ width: "800px" }}
//         className={"modal"}
//         open={modal}
//         close={() => {
//           play.current?.load();
//           setModal(false);
//         }}
//       >
//         <Player
//           width={800}
//           height={600}
//           ref={play as any}
//           poster="/assets/poster.png"
//           src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
//         />
//       </Drawer>
//     </>
//   );
// };

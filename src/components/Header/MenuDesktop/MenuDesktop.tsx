"use client";

import React, { useContext, useState } from "react";
import { ThemeModeContext } from "@/context/ThemeModeContext";
import { Languages } from "./Languages/Languages";
import { SocialMediaIcons } from "../../SocialMediaIcons/SocialMediaIcons";
import Image from "next/image";
import { NavLinkDesktop } from "../NavLinkDesktop/NavLinkDesktop";
import Link from "next/link";
import SearchModal from "./SearchModal";
import styles from "./SearchModal.module.css";

export const MenuDesktop = () => {
  const { toggleTheme, isDark } = useContext(ThemeModeContext);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    setShowModal(event.target.value.length > 0);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSearch("");
  };

  return (
    <header
      className={`responsive m l ${isDark ? "small-blur" : "primary"} fixed`}
    >
      <div className={"grid"}>
        <div className={"m1"}>
          <div className={"tiny-space"}></div>
          <Link href={"/"} className="left-align transparent">
            <Image width={80} height={80} src="/stw_1.png" alt={"STW icon"} />
          </Link>
          <div className={"tiny-space"}></div>
        </div>
        <div className="m11 no-padding row">
          <div className={"small-space"}></div>
          <NavLinkDesktop />
          <SocialMediaIcons showShare={false} />
          <div></div>
          <div></div>

          <div className="field label suffix small-round small border background">
            <input type="text" value={search} onChange={handleSearchChange} />
            <i>search</i>
          </div>

          <Languages />

          <button className="circle transparent" onClick={toggleTheme}>
            <Image
              src={"/theme-icon.svg"}
              alt="Ícone do tema"
              width={24}
              height={24}
            />
          </button>

          <div className={"small-space"}></div>
        </div>
      </div>
      {showModal && (
        <div className={styles.backdrop}>
          <SearchModal search={search} onClose={handleCloseModal} />
        </div>
      )}
    </header>
  );
};

// "use client";

// import React, { useContext, useState, useMemo } from "react";
// import { ThemeModeContext } from "@/context/ThemeModeContext";
// import { Languages } from "./Languages/Languages";
// import { SocialMediaIcons } from "../../SocialMediaIcons/SocialMediaIcons";
// import Image from "next/image";
// import { NavLinkDesktop } from "../NavLinkDesktop/NavLinkDesktop";
// import Link from "next/link";
// import themeIcon from "../../../../public/theme-icon.svg";
// import SearchModal from "./SearchModal";
// import styles from "./SearchModal.module.css";

// const news = [
//   {
//     title: "Novidade em Tecnologia",
//     paragraph:
//       "Descubra as últimas tendências em desenvolvimento de software e como elas podem impactar o futuro.",
//   },
//   {
//     title: "Economia Global",
//     paragraph:
//       "Análise do crescimento econômico em diferentes regiões e seus potenciais efeitos no mercado mundial.",
//   },
//   {
//     title: "Saúde e Bem-estar",
//     paragraph:
//       "Explorando novas técnicas de bem-estar e saúde mental para um estilo de vida mais saudável.",
//   },
//   {
//     title: "Educação e Aprendizado",
//     paragraph:
//       "As melhores práticas para potencializar o aprendizado e desenvolvimento pessoal em qualquer idade.",
//   },
//   {
//     title: "Sustentabilidade e Meio Ambiente",
//     paragraph:
//       "Iniciativas sustentáveis que estão fazendo a diferença no planeta e como você pode contribuir.",
//   },
// ];

// export const MenuDesktop = () => {
//   const { toggleTheme, isDark } = useContext(ThemeModeContext);
//   const [search, setSearch] = useState("");

//   const filteredNews = useMemo(() => {
//     const lowerSearch = search.toLowerCase();
//     return news.filter(
//       (newsItem) =>
//         newsItem.title.toLowerCase().includes(lowerSearch) ||
//         newsItem.paragraph.toLowerCase().includes(lowerSearch)
//     );
//   }, [search]);

//   const [showModal, setShowModal] = useState(false);

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearch(event.target.value);
//     setShowModal(event.target.value.length > 0);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSearch("");
//   };

//   return (
//     <header
//       className={`responsive m l ${isDark ? "small-blur" : "primary"} fixed`}
//     >
//       <div className={"grid"}>
//         <div className={"m1"}>
//           <div className={"tiny-space"}></div>
//           <Link href={"/"} className="left-align transparent">
//             <Image width={80} height={80} src="/stw_1.png" alt={"STW icon"} />
//           </Link>
//           <div className={"tiny-space"}></div>
//         </div>
//         <div className="m11 no-padding row">
//           <div className={"small-space"}></div>
//           <NavLinkDesktop />
//           <SocialMediaIcons showShare={false} />
//           <div></div>
//           <div></div>

//           <div className="field label suffix small-round small border background">
//             <input type="text" value={search} onChange={handleSearchChange} />
//             <i>search</i>
//           </div>

//           <Languages />

//           <button className="circle transparent" onClick={toggleTheme}>
//             <Image
//               src={"/theme-icon.svg"}
//               alt="Ícone do tema"
//               width={24}
//               height={24}
//             />
//           </button>

//           <div className={"small-space"}></div>
//         </div>
//       </div>
//       {showModal && (
//         <div className={styles.backdrop}>
//           <SearchModal posts={filteredNews} onClose={handleCloseModal} />
//         </div>
//       )}
//     </header>
//   );
// };

"use client";

import React, { useContext, useEffect, useState } from "react";
import { ThemeModeContext } from "@/context/ThemeModeContext";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Languages } from "../MenuDesktop/Languages/Languages";
import { Category } from "@/dtos/Category";
import { getAllCategories } from "@/source/category";
import { useLocale } from "next-intl";
import { SocialMediaIcons } from "@/components/SocialMediaIcons/SocialMediaIcons";

export const MenuMobile = () => {
  const t = useTranslations("NavLinkDesktopFooter");
  const { theme, toggleTheme } = useContext(ThemeModeContext);
  const locale = useLocale();
  const [categoriesData, setCategoriesData] = useState<Category[]>([]);

  useEffect(() => {
    getAllCategories(locale).then(setCategoriesData);
  }, [locale]);

  const categories = {
    STW: ["noticias", "servicos", "eventos", "trabalheconosco"],
    ESTRANGEIRO: [
      "destinos",
      "universidadespt",
      "academicos",
      "cursos",
      "estude",
      "bolsas",
      "trabalhe",
    ],
    PROJETOS: [
      "programadeintegracao",
      "universidadespelomundo",
      "podcasts",
      "topstudents",
    ],
    TOPICOS: ["oportunidades", "tempo", "maisnoticias", "cienciaeinovacao"],
  };

  type CategoryKey = "STW" | "ESTRANGEIRO" | "TOPICOS" | "PROJETOS" | "NULL";
  const [selectedTopic, setSelectedTopic] = useState<CategoryKey>();

  return (
    <>
      <header className={`responsive s primary fixed ${theme}`}>
        <div>
          <nav className="grid">
            <Link href={"/"} className="left-align s3">
              <Image width={80} height={80} src="/stw.svg" alt={"STW icon"} />
            </Link>

            <div className="s1"></div>
            <div className="s3">
              <SocialMediaIcons />
            </div>
            <div className="s1"></div>

            <div className="s2">
              <Languages />
            </div>

            <button onClick={toggleTheme} className="circle transparent s2">
              {theme === "dark" ? <i>dark_mode</i> : <i>light_mode</i>}
            </button>
          </nav>
          <div className="">
            <div className="grid">
              {Object.keys(categories).map((category, index) => (
                <h6
                  style={{
                    cursor: "pointer",
                    fontSize: "12px",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = "0.5")}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                  className="small bold s3"
                  key={index}
                  onClick={() => {
                    if (selectedTopic === category) {
                      setSelectedTopic("NULL");
                    } else {
                      setSelectedTopic(category as CategoryKey);
                    }
                  }}
                >
                  {t(category)}
                </h6>
              ))}
              <div className="small-space"></div>
            </div>
            <div>
              {selectedTopic !== "NULL" && (
                <menu
                  key={selectedTopic}
                  className={`min ${
                    selectedTopic ? "active" : ""
                  } primary bottom-round`}
                >
                  {filteredCategories(
                    categoriesData,
                    categories[
                      selectedTopic === undefined ? "PROJETOS" : selectedTopic
                    ]
                  ).map((category, index) => (
                    <Link key={index} href={`/category/${category.name_url}`}>
                      {category.name}
                    </Link>
                  ))}
                  <div className="small-space"></div>
                </menu>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
const filteredCategories = (
  categories: Category[],
  filteredItems: string[]
) => {
  return categories.filter((category) =>
    filteredItems.includes(category.name_url)
  );
};

// "use client";

// import React, { useContext, useEffect, useState } from "react";
// import { ThemeModeContext } from "@/context/ThemeModeContext";
// import Image from "next/image";
// import Link from "next/link";
// import { useTranslations } from "next-intl";
// import { Languages } from "../MenuDesktop/Languages/Languages";
// import { Category } from "@/dtos/Category";
// import { getAllCategories } from "@/source/category";
// import { useLocale } from "next-intl";

// export const MenuMobile = () => {
//   const t = useTranslations("NavLinkDesktopFooter");
//   const { theme, toggleTheme } = useContext(ThemeModeContext);
//   const locale = useLocale();
//   const [isOpen, setIsOpen] = useState(false);
//   const [categoriesData, setCategoriesData] = useState<Category[]>([]);

//   useEffect(() => {
//     getAllCategories(locale).then(setCategoriesData);
//   }, [locale]);

//   const categories = {
//     STW: ["noticias", "servicos", "eventos", "trabalheconosco"],
//     ESTRANGEIRO: [
//       "destinos",
//       "universidadespt",
//       "academicos",
//       "cursos",
//       "estude",
//       "bolsas",
//       "trabalhe",
//     ],
//     PROJETOS: [
//       "programadeintegracao",
//       "universidadespelomundo",
//       "podcasts",
//       "topstudents",
//     ],
//     TOPICOS: ["oportunidades", "tempo", "maisnoticias", "cienciaeinovacao"],
//   };

//   type CategoryKey = "STW" | "ESTRANGEIRO" | "TOPICOS" | "PROJETOS" | "NULL";
//   const [selectedTopic, setSelectedTopic] = useState<CategoryKey>();

//   return (
//     <>
//       <header className={`responsive s primary fixed ${theme}`}>
//         <nav>
//           <div className={"absolute left-align"}>
//             <button
//               onClick={() => setIsOpen(true)}
//               className="circle transparent"
//             >
//               <i>menu</i>
//             </button>
//           </div>
//           <Link href={"/"} className="center-align max">
//             <Image width={80} height={80} src="/stw.svg" alt={"STW icon"} />
//           </Link>
//           <button onClick={toggleTheme} className="circle transparent">
//             {theme === "dark" ? <i>dark_mode</i> : <i>light_mode</i>}
//           </button>
//         </nav>
//       </header>

//       <dialog className="left primary" open={isOpen}>
//         {Object.keys(categories).map((category, index) => (
//           <button
//             className="row bold small-padding small-round"
//             key={index}
//             onClick={() => {
//               if (selectedTopic === category) {
//                 setSelectedTopic("NULL");
//               } else {
//                 setSelectedTopic(category as CategoryKey);
//               }
//             }}
//           >
//             {t(category)}
//           </button>
//         ))}

//         <div>
//           {selectedTopic !== "NULL" && (
//             <menu
//               key={selectedTopic}
//               className={`min ${
//                 selectedTopic ? "active" : ""
//               } small-round primary`}
//             >
//               {filteredCategories(
//                 categoriesData,
//                 categories[
//                   selectedTopic === undefined ? "PROJETOS" : selectedTopic
//                 ]
//               ).map((category, index) => (
//                 <Link key={index} href={`/category/${category.name_url}`}>
//                   {category.name}
//                 </Link>
//               ))}
//             </menu>
//           )}
//         </div>

//         <div className="right-align">

//           <button
//             className="transparent circle large"
//             onClick={() => setIsOpen(false)}
//           >
//             <i>close</i>
//           </button>
//         </div>
//       </dialog>
//     </>
//   );
// };
// const filteredCategories = (
//   categories: Category[],
//   filteredItems: string[]
// ) => {
//   return categories.filter((category) =>
//     filteredItems.includes(category.name_url)
//   );
// };

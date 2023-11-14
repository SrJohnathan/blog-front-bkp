"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Collapse } from "./Collapse";
import Link from "next/link";
import { Category } from "@/dtos/Category";
import { getAllCategories } from "@/source/category";
import React from "react";
import styles from "./NavLinkDesktop.module.css";

export const NavLinkDesktop = () => {
  const [categoriesData, setCategoriesData] = useState<Category[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("NavLinkDesktopFooter");

  useEffect(() => {
    getAllCategories(locale).then(setCategoriesData);
  }, [locale]);

  const categories = {
    STW: {
      topics: ["noticias", "servicos", "eventos", "trabalheconosco"],
    },
    ESTRANGEIRO: {
      topics: [
        "destinos",
        "universidadespt",
        "academicos",
        "cursos",
        "estude",
        "bolsas",
        "trabalhe",
      ],
    },
    PROJETOS: {
      topics: [
        "programadeintegracao",
        "universidadespelomundo",
        "podcasts",
        "topstudents",
      ],
    },
    TOPICOS: {
      topics: ["oportunidades", "tempo", "maisnoticias", "cienciaeinovacao"],
    },
  };

  type CategoryKey = keyof typeof categories;

  const renderCategorySection = (categoryKey: CategoryKey) => {
    const categoryTopics = categories[categoryKey]?.topics;

    if (!categoryTopics) return null;

    return (
      <div key={categoryKey}>
        <h6 className={styles.title}>{t(categoryKey)}</h6>
        <Collapse isOpen={isOpen}>
          <div className="min">
            {filteredCategories(categoriesData, categoryTopics as string[]).map(
              (category, index) => (
                <React.Fragment key={index}>
                  <Link href={`/category/${category.name_url}`}>
                    <h6 className="small samll-line">{category.name}</h6>
                  </Link>
                  <br />
                </React.Fragment>
              )
            )}
          </div>
        </Collapse>
      </div>
    );
  };

  return (
    <div
      className="max"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={styles.topics}>
        {Object.keys(categories).map((categoryKey) =>
          renderCategorySection(categoryKey as CategoryKey)
        )}
      </div>
    </div>
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

// import { useEffect, useState } from "react";
// import { useLocale, useTranslations } from "next-intl";
// import { Collapse } from "./Collapse";
// import Link from "next/link";
// import { Category } from "@/dtos/Category";
// import { getAllCategories } from "@/source/category";
// import React from "react";

// export const NavLinkDesktop = () => {
//   const [categoriesData, setCategoriesData] = useState<Category[]>([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const locale = useLocale();
//   const t = useTranslations("NavLinkDesktopFooter");

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

//   type CategoryKey = keyof typeof categories;

//   const renderCategorySection = (categoryKey: CategoryKey) => {
//     return (
//       <div key={categoryKey} className={"m3 no-padding"}>
//         <h6 className="small bold">{t(categoryKey)}</h6>
//         <Collapse isOpen={isOpen}>
//           {filteredCategories(categoriesData, categories[categoryKey])?.map(
//             (category, index) => (
//               <React.Fragment key={index}>
//                 <Link href={`/category/${category.name_url}`}>
//                   <h6 className="small small-line">{category.name}</h6>
//                 </Link>
//                 <br />
//               </React.Fragment>
//             )
//           )}
//         </Collapse>
//       </div>
//     );
//   };

//   return (
//     <div
//       className="max"
//       onMouseEnter={() => setIsOpen(true)}
//       onMouseLeave={() => setIsOpen(false)}
//     >
//       <div className={"grid left-align"}>
//         {Object.keys(categories).map((categoryKey) =>
//           renderCategorySection(categoryKey as CategoryKey)
//         )}
//       </div>
//     </div>
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

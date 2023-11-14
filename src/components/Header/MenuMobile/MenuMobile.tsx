"use client";

import React, {useContext, useEffect, useRef, useState} from "react";
import {ThemeModeContext} from "@/context/ThemeModeContext";
import Image from "next/image";
import Link from "next/link";
import {useTranslations} from "next-intl";
import {Languages} from "../MenuDesktop/Languages/Languages";
import {Category} from "@/dtos/Category";
import {getAllCategories} from "@/source/category";
import {useLocale} from "next-intl";
import StwIcon from "../../../../public/stw-icon.svg";
import AbroadIcon from "../../../../public/white-plane.svg";
import ProjectsIcon from "../../../../public/white-projects.svg";
import TopicsIcon from "../../../../public/white-topics.svg";
import styles from "./MenuMobile.module.css";

export const MenuMobile = () => {
    const t = useTranslations("NavLinkDesktopFooter");
    const {theme, toggleTheme} = useContext(ThemeModeContext);
    const locale = useLocale();
    const [categoriesData, setCategoriesData] = useState<Category[]>([]);

    useEffect(() => {
        getAllCategories(locale).then(setCategoriesData);
    }, [locale]);

    const categories = {
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
            icon: AbroadIcon,
        },
        PROJETOS: {
            topics: [
                "programadeintegracao",
                "universidadespelomundo",
                "podcasts",
                "topstudents",
            ],
            icon: ProjectsIcon,
        },
        TOPICOS: {
            topics: ["oportunidades", "tempo", "maisnoticias", "cienciaeinovacao"],
            icon: TopicsIcon,
        },
        STW: {
            topics: ["noticias", "servicos", "eventos", "trabalheconosco"],
            icon: StwIcon,
        },
    };

    type CategoryKey = keyof typeof categories | "NULL";
    const [selectedTopic, setSelectedTopic] = useState<CategoryKey>("NULL");

    const wrapperRef = useRef<HTMLElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node)
            ) {
                setSelectedTopic("NULL");
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    const toggleMenu = () => {
        setSelectedTopic((prevSelectedTopic) =>
            prevSelectedTopic !== "NULL" ? "NULL" : prevSelectedTopic
        );
    };

    return (
        <>
            <header
                className={`small-padding s primary fixed ${theme}`}
                ref={wrapperRef}
            >
                {/* Menu social no topo  */}
                <nav className="grid responsive">
                    <div className="s5"></div>
                    <Link href={"/"} className="center-align s2 vertical">
                        <Image
                            width={26}
                            height={26}
                            src="/color-STW-img.svg"
                            alt="STW icon"
                        />
                        <span className="bold small">STW</span>
                    </Link>
                    <div className="s2"></div>

                    <div className="s1">
                        <Languages/>
                    </div>
                    <div className="s1">
                        <button className="circle transparent" onClick={toggleTheme}>
                            <Image
                                src={"/theme-icon.svg"}
                                alt="Ícone do tema"
                                width={40}
                                height={40}
                            />
                        </button>
                    </div>
                </nav>

                <div className="small-space"></div>

                {/* Menu tópicos e subtópicos */}
                <div>
                    <div className={`${styles.wrapper} topicsScroll`}>
                        {Object.keys(categories).map((categoryKey) => {
                            const key = categoryKey as keyof typeof categories;
                            const category = categories[key];
                            return (
                                <button
                                    key={categoryKey}
                                    className={styles.buttons}
                                    onClick={() => {
                                        setSelectedTopic(
                                            selectedTopic === categoryKey
                                                ? "NULL"
                                                : (categoryKey as CategoryKey)
                                        );

                                    }}
                                >
                                    <div>
                                        <Image
                                            className="img"
                                            src={category.icon}
                                            alt={`${categoryKey} icon`}
                                            width={18}
                                            height={18}
                                        />
                                    </div>
                                    <p>{t(categoryKey)}</p>
                                </button>
                            );
                        })}
                    </div>
                    <div className="small-space"></div>

                    {/* Submenu renderizado condicionalmente */}
                    {selectedTopic !== "NULL" && (
                        <div className={"grid"}>
                            <div className={"s8"}>

                                <div
                                    className={`submenu-container ${selectedTopic ? "expanded" : ""}`}
                                >
                                    {filteredCategories(
                                        categoriesData,
                                        categories[selectedTopic as keyof typeof categories].topics
                                    ).map((category, index) => (
                                        <React.Fragment key={index}>
                                            <Link onClick={toggleMenu} href={`/category/${category.name_url}`}>
                                                <h6 className="small-line" style={{fontSize: "0.9rem"}}>
                                                    {category.name}
                                                </h6>
                                            </Link>
                                            <br/>
                                        </React.Fragment>
                                    ))}
                                </div>

                            </div>
                            <div className={"s4"}>
                                <div className="row right-align ">
                                    <button
                                        className="circle small background"
                                        onClick={toggleMenu}
                                    >
                                        <i>close</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
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

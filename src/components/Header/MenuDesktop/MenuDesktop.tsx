"use client";

import React, { useContext, useState } from "react";
import { ThemeModeContext } from "@/context/ThemeModeContext";
import { Languages } from "./Languages/Languages";
import { SocialMediaIcons } from "../../SocialMediaIcons/SocialMediaIcons";
import Image from "next/image";
import { NavLinkDesktop } from "../NavLinkDesktop/NavLinkDesktop";
import Link from "next/link";
import SearchModal from "./SearchModal/SearchModal";
import styles from "./SearchModal/SearchModal.module.css";

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

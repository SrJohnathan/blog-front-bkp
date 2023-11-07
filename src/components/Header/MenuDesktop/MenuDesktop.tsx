"use client";

import React, { useContext, useState, useMemo } from "react";
import { ThemeModeContext } from "@/context/ThemeModeContext";
import { Languages } from "./Languages/Languages";
import { SocialMediaIcons } from "../../SocialMediaIcons/SocialMediaIcons";
import Image from "next/image";
import { NavLinkDesktop } from "../NavLinkDesktop/NavLinkDesktop";
import Link from "next/link";

const example = ["x", "y", "z"]; //buscar API e array de posts

export const MenuDesktop = () => {
  const { toggleTheme, isDark } = useContext(ThemeModeContext);
  const [search, setSearch] = useState("");

  const filteredPosts = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return example.filter((postInfo) =>
      postInfo.toLowerCase().includes(lowerSearch)
    );
  }, [search]); //por nas dependências o array dinâmico de posts

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
          <SocialMediaIcons />

          <div className="field label prefix small fill small-round">
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            {filteredPosts.length > 0 && filteredPosts.map((postInfo) => <></>)}
            <i>search</i>
          </div>

          <Languages />

          <button className="circle transparent" onClick={() => toggleTheme()}>
            {isDark ? <i>dark_mode</i> : <i>light_mode</i>}
          </button>
          <div className={"small-space"}></div>
        </div>
      </div>
    </header>
  );
};

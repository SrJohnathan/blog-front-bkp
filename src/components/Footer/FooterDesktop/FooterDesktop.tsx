"use client";

import Image from "next/image";
import {
  boxColunm,
  boxRow,
  footerStyleTopPad,
  footerStyleBottomPad,
  NavLinkStyleTopPad,
} from "./styles";

import { useTranslations } from "next-intl";
import { NavLinkFooter } from "../NavLinkFooter/NavLinkFooter";
import { SocialMediaIcons } from "@/components/SocialMediaIcons/SocialMediaIcons";

export const FooterDesktop = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="responsive m l">
      <div className={"primary grid"}>
        <div style={NavLinkStyleTopPad}>
          <NavLinkFooter />
        </div>
        <div className={"grid m12"} style={footerStyleTopPad}>
          <div style={boxRow}>
            <Image src={"/stw.svg"} width={194} height={63} alt={""} />
          </div>
          <div className={"m6"} style={boxColunm}>
            <small>{t("copyrightText")}</small>
          </div>
          <div className={"m6"} style={boxColunm}>
            <small>{t("info")}</small>
          </div>
        </div>
        <div className={"m12 right"} style={footerStyleBottomPad}>
          <div style={boxColunm}></div>
          <SocialMediaIcons />
        </div>
      </div>
    </footer>
  );
};

"use client";

import Image from "next/image";

import { useTranslations } from "next-intl";
import { NavLinkFooter } from "../NavLinkFooter/NavLinkFooter";
import { SocialMediaIcons } from "@/components/SocialMediaIcons/SocialMediaIcons";

export const FooterDesktop = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="m l primary padding">
      <div className="space"></div>
      <div className="row center-align">
        <NavLinkFooter />
      </div>

      <div>
        <div className="">
          <Image src={"/stw.svg"} width={194} height={63} alt={""} />
        </div>
        <div className="grid">
          <small className="m6">{t("copyrightText")}</small>
          <small className="m6">{t("info")}</small>
        </div>
        <div className="row right-align">
          <div className="right-margin">
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </footer>
  );
};

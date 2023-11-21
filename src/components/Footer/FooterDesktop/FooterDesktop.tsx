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
      <div className="grid">
        <div className="m1"></div>
        <div className="m10">
          <NavLinkFooter />
        </div>
      </div>

      <div>
        <Image src={"/stw.svg"} width={194} height={63} alt={""} />
        <div className="grid">
          <small className="m6">{t("copyrightText")}</small>
          <small className="m6">{t("info")}</small>
        </div>
        <div className="row right-align">
          <SocialMediaIcons showShare={false} />
        </div>
      </div>
    </footer>
  );
};

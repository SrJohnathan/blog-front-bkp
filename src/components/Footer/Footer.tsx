"use client";

import Image from "next/image";
import {
  boxColunm,
  boxColunmAlt,
  boxRow,
  footerStyleTopPad,
  footerStyleBottomPad,
  NavLinkStyleTopPad,
} from "./styles";
import { useTranslations } from "next-intl";
import { NavLinkFooter } from "./NavLinkFooter/NavLinkFooter";

export const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <>
      <div className={"responsive primary grid"}>
        <div style={NavLinkStyleTopPad}>
          <NavLinkFooter />
        </div>
        <div className={"grid s12 m12"} style={footerStyleTopPad}>
          <div className={"s12 m6"} style={boxColunm}>
            <div style={boxRow}>
              <Image src={"/stw.svg"} width={194} height={63} alt={""} />
              <label>{t("Últimas notícias")}</label>
            </div>
            <div className={"small-space"}></div>
            <label>{t("copyrightText")}</label>
          </div>
          <div className={"s12 m6"} style={boxColunm}>
            <div style={boxColunmAlt}>
              <label>{t("info")}</label>
            </div>
          </div>
        </div>
        <div className={"s12 m12 right"} style={footerStyleBottomPad}>
          <div style={boxColunm}></div>
          <div style={boxColunm}>
            <div style={boxRow}>
              <div style={{ marginRight: "30px" }}>
                <Image
                  src={"/white-facebook.svg"}
                  width={26}
                  height={26}
                  alt=""
                />
              </div>
              <div style={{ marginRight: "30px" }}>
                <Image
                  src={"/white-instagram.svg"}
                  width={26}
                  height={26}
                  alt=""
                />
              </div>
              <div style={{ marginRight: "30px" }}>
                <Image
                  src={"/white-linkedin.svg"}
                  width={26}
                  height={26}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

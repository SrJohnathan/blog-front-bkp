"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import Image from "next/image";

export const FooterMobile = () => {
  const t = useTranslations("Footer");

  const footerStyle: React.CSSProperties = {
    position: "fixed",
    bottom: 0,
    width: "100%",
    boxShadow: "10px 10px 20px 0px",
  };

  return (
    <div className="grid s s12 small-padding background" style={footerStyle}>
      <div className="s3 center-align small-round">
        <Link href={"#"} className="vertical">
          <Image src={"/search.svg"} alt="" width={22} height={22} />
          <span style={{ color: "#767680" }}>{t("Buscar")}</span>
        </Link>
      </div>
      <div className="s3 center-align">
        <Link href={"#"} className="vertical">
          <Image src={"/heart.svg"} alt="" width={22} height={22} />
          <span style={{ color: "#767680" }}>{t("Favorito")}</span>
        </Link>
      </div>
      <div className="s3 center-align">
        <Link href={"#"} className="vertical">
          <Image src={"/bell.svg"} alt="" width={22} height={22} />
          <span style={{ color: "#767680" }}>{t("Notificacoes")}</span>
        </Link>
      </div>
      <div className="s3 center-align small-round">
        <Link href={"#"} className="vertical">
          <Image src={"/profile.svg"} alt="" width={22} height={22} />
          <span style={{ color: "#767680" }}>{t("Perfil")}</span>
        </Link>
      </div>
    </div>
  );
};

export default FooterMobile;

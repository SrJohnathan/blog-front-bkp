"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import FooterSearchModal from "./FooterSearchModal/FooterSearchModal";

export const FooterMobile = () => {
  const t = useTranslations("Footer");
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  useEffect(() => {}, [isModalOpen]);

  const footerStyle: React.CSSProperties = {
    position: "fixed",
    bottom: 0,
    width: "100%",
    boxShadow: "10px 10px 20px 0px",
  };

  return (
    <>
      <div className="grid s s12 small-padding background" style={footerStyle}>
        <button
          className="s3 small-round vertical transparent"
          onClick={toggleModal}
        >
          <Image
            src={"/search.svg"}
            alt="botão de busca"
            width={22}
            height={22}
          />
          <span style={{ color: "#767680" }}>{t("Buscar")}</span>
        </button>
        <button className="s3 small-round vertical transparent">
          <Image src={"/heart.svg"} alt="favoritar" width={22} height={22} />
          <span style={{ color: "#767680" }}>{t("Favorito")}</span>
        </button>
        <button className="s3 small-round vertical transparent">
          <Image
            src={"/bell.svg"}
            alt="ativar notificações"
            width={22}
            height={22}
          />
          <span style={{ color: "#767680" }}>{t("Notificacoes")}</span>
        </button>
        <button className="s3 small-round vertical transparent">
          <Image
            src={"/profile.svg"}
            alt="acessar perfil"
            width={22}
            height={22}
          />
          <span style={{ color: "#767680" }}>{t("Perfil")}</span>
        </button>
      </div>
      {isModalOpen && <FooterSearchModal onClose={toggleModal} />}
    </>
  );
};

export default FooterMobile;

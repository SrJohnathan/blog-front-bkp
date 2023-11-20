"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./ShareIcon.module.css";

const ShareModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copiado para a área de transferência!");
  };

  const contentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const openWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevenir a navegação padrão
    window.open(
      `whatsapp://send?text=${encodeURIComponent(window.location.href)}`,
      "_blank"
    );
  };

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.content} onClick={contentClick}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <div className={styles.options}>
          <button onClick={copyToClipboard} className="background">
            <Image
              src="/copy-link.svg"
              width={24}
              height={24}
              alt="Copiar Link"
            />
            <span>Copiar Link</span>
          </button>

          <Link href="" className={styles.option} onClick={openWhatsApp}>
            <Image src="/whatsapp.svg" width={24} height={24} alt="WhatsApp" />
            <span>WhatsApp</span>
          </Link>

          <Link
            className={styles.option}
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              window.location.href
            )}`}
          >
            <Image
              src="/color-facebook.svg"
              width={24}
              height={24}
              alt="Facebook"
            />
            <span>Facebook</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

interface ShareIconProps {
  active: boolean;
}

export const ShareIcon: React.FC<ShareIconProps> = ({ active }) => {
  const [showModal, setShowModal] = useState(false);

  if (!active) {
    return null;
  }

  return (
    <div>
      <i onClick={() => setShowModal(true)} className="small">
        <Image
          src={"/share.svg"}
          width={24}
          height={24}
          alt="Ícone de compartilhamento"
        />
      </i>
      {showModal && <ShareModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default ShareIcon;

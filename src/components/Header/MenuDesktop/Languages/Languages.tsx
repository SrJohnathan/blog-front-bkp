"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Languages = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <button
      className="circle transparent"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <i>translate</i>
      {isMenuOpen && (
        <menu className="no-wrap left">
          <Link href={"/en"} className="row">
            <Image
              className="circle tiny"
              width={26}
              height={26}
              src="/flags/usa.svg"
              alt="Change to English language"
            />
            <span>English</span>
          </Link>
          <Link href={"/fr"} className="row">
            <Image
              className="circle tiny"
              width={26}
              height={26}
              src="/flags/france.svg"
              alt="Changer en langue française"
            />
            <span>Français</span>
          </Link>
          <Link href={"/es"} className="row">
            <Image
              className="circle tiny"
              width={26}
              height={26}
              src="/flags/spain.svg"
              alt="Cambiar para idioma Español"
            />
            <span>Español</span>
          </Link>
          <Link href={"/pt"} className="row">
            <Image
              className="circle tiny"
              width={26}
              height={26}
              src="/flags/portugal.svg"
              alt="Mudar para o idioma Português"
            />
            <span>Português</span>
          </Link>
        </menu>
      )}
    </button>
  );
};

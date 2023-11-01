"use client";

import { FooterDesktop } from "./FooterDesktop/FooterDesktop";
import { FooterMobile } from "./FooterMobile/FooterMobile";

export const Footer = () => {
  return (
    <>
      <FooterMobile />
      <FooterDesktop />
    </>
  );
};

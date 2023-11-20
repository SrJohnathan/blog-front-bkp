"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface ShareIconProps {
  active: boolean;
}

export const ShareIcon = ({ active }: ShareIconProps) => {
  const [showOptions, setShowOptions] = useState(false);

  if (!active) {
    return null;
  }

  const shareOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div>
      <i onClick={shareOptions} className="small">
        <Image
          src={"/share.svg"}
          width={26}
          height={26}
          alt={"ícone de compartilhamento em outras mídias"}
        ></Image>
      </i>
      {showOptions && (
        <div>
          <Link href="whatsapp://send?text=[LINK_DO_SEU_BLOG]">Whatsapp</Link>
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=[LINK_DO_SEU_BLOG]`}
          >
            Facebook
          </Link>
          <Link
            href={`https://www.instagram.com/?url=[LINK_DO_SEU_BLOG]`}
          ></Link>
        </div>
      )}
    </div>
  );
};

export default ShareIcon;

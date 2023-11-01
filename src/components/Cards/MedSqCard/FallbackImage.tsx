"use client";

import Image from "next/image";
import { useState } from "react";

export const FallbackImage = ({ src, fallbackSrc, alt }: any) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleImageDelay = () => {
    setImgSrc(fallbackSrc);
  };

  return (
    <Image
      width={200}
      height={200}
      src={imgSrc}
      alt={alt}
      onError={handleImageDelay}
    />
  );
};

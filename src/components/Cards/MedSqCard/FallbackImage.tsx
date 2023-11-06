"use client";

import Image from "next/image";
import { useState } from "react";

export const FallbackImage = ({ src, fallbackSrc, alt,className }: any) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleImageDelay = () => {
    setImgSrc(fallbackSrc);
  };

  return (
    <Image
      className={className}
      width={200}
      height={200}
      src={imgSrc}
      alt={alt}
      onError={handleImageDelay}
    />
  );
};

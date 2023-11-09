"use client";

import Image from "next/image";
import {CSSProperties, useState} from "react";


interface Props {
  src:string ,fallbackSrc?:string, alt:string,className:string  ,width:number  | undefined,height:number  | undefined,style? : CSSProperties

}


export const FallbackImage = ({ src, fallbackSrc, alt,className  ,width ,height,style }: Props) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleImageDelay = () => {
    setImgSrc(fallbackSrc || "./lod.gif");
  };

  return (
    <Image
      className={className}
      style={style}
      width={width}
      height={height}
      src={imgSrc}
      alt={alt}
      onError={handleImageDelay}
    />
  );
};

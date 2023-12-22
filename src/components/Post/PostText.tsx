'use client'

import Image from "next/image";
import {GetNews} from "@/dtos/News";
import {FallbackImage} from "@/components/Cards/MedSqCard/FallbackImage";
import {useMediaQuery} from "@/extension/hooks";

interface Props {
    news: GetNews;
}

export const PostText = (props: Props) => {



    const isMobile = (useMediaQuery(600)).isMatching;


    return (
        <div className={"white round small-margin"}>
            <FallbackImage
                className="responsive m l medium-height round"
                width={800}
                height={358}
                src={`/api/files/${props.news.img}`}
                alt=""
                fallbackSrc={"./lod.gif"}
            />

            <div className="small-space"></div>

            <FallbackImage
                className="s round"
                width={800}
                height={358}
                src={`/api/files/${props.news.img}`}
                style={{width: "100%" ,height: isMobile ? "50%" : "auto" }}
                alt=""
                fallbackSrc={"./lod.gif"}
            />
            {props.news.tipo == "Texto" && (
                <p className="left-align">{props.news.conteudo}</p>
            )}

            {props.news.tipo == "Html" && (

                <div className={"large-padding"}>
                    <div style={{color:"rgba(6, 33, 58, 1)"}}
                        dangerouslySetInnerHTML={{__html: props.news.conteudo || ""}}
                        className="left-align open-sans"
                    ></div>
                </div>
            )}
        </div>
    );
};

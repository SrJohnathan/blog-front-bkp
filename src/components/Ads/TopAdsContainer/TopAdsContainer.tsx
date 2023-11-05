"use client";

import { Ex } from "@/extension/ex";
import { Ads } from "@/dtos/Ads";
import { useEffect, useRef, useState } from "react";
import "react-caroussel/dist/index.css";
// @ts-ignore
import ReactCaroussel from "react-caroussel";
import { useRouter } from "next/router";
import { Adsense } from "@ctrl/react-adsense";
import Image from "next/image";

const Card = ({ image, url }: { image: string; url: string }) => {
  return (
    <article style={{ position: "relative" }}>
      <Image
        className={"responsive"}
        src={image}
        width={100}
        height={100}
        alt=""
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <div className="large-space"></div>
      <div className="large-space"></div>
      <div className="large-space"></div>
      <button onClick={(event) => {}}>Read more</button>
    </article>
  );
};

export const TopAdsContainer = () => {
  const [ads, setAds] = useState<Ads | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % (ads?.images.length || 0));
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, ads]);

  useEffect(() => {
    Ex.apiClient()
      .get("/api/ad/first/1")
      .then((value) => setAds(value.data))
      .catch((reason) => setAds(null));
  }, [setAds]);

  return (
    <>
      {ads != null && (
        <>
          <div className="large-space"></div>
          <div className="large-space"></div>
          <div className="large-space"></div>

          <div className="no-space  padding  center middle">
            <Adsense
              client="ca-pub-5042411247457773"
              slot="4419568689"
              adTest={"on"}
              style={{ display: "block" }}
              layout="in-article"
              format="fluid"
            />

            {/*   <ReactCaroussel
                              infinite={true}
                              autoplay={true}
                              speed={ads.time} // 2s
                              display={{
                                  dots: false,
                                  arrows: false
                              }}
                          >

                              <Card key={6} image={'https://via.placeholder.com/1200x600'}  />
                              <Card key={6} image={'https://via.placeholder.com/1200x600'}  />

                              {ads.images.map((value, index) =>


                                      <Card key={index} image={Ex.formatLoadUrl(value)}  />



                              )}


                          </ReactCaroussel> */}
          </div>
        </>
      )}
    </>
  );
};

async function getAds() {
  try {
    const name = 1;
    const r = await Ex.apiClient().get(`/api/ads/first/${name}`);
    const value: Ads = r.data;

    return value;
  } catch (e: any) {
    console.error(e);
    return null;
  }
}

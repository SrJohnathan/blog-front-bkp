"use client";

import { Ex } from "@/extension/ex";
import { Ads } from "@/dtos/Ads";
import { useEffect, useState } from "react";
import { Adsense } from "@ctrl/react-adsense";

export const MainAdsContainer = () => {
  return (
    <>
      <article className="small background no-elevate">
        <div className="absolute center middle">
          <Adsense
            client="ca-pub-5042411247457773"
            slot="4419568689"
            adTest={"on"}
            style={{ width: 500, height: 300 }}
            layout="in-article"
            format=""
          />
        </div>
      </article>
      <article className="small background no-elevate">
        <div className="absolute center middle">
          <span>PUBLICIDADE</span>
        </div>
      </article>
    </>
  );
};

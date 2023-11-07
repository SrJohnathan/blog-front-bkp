import { LateralPostImpl, TopAdsImpl, Config } from "@/dtos/Settings";
import { Ads } from "@/dtos/Ads";
import { GetNews } from "@/dtos/News";
import { Ex } from "@/extension/ex";
import { Category } from "@/dtos/Category";

/*
* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5042411247457773"
     crossorigin="anonymous"></script>
<!-- topads -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-5042411247457773"
     data-ad-slot="9267983951"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
*
*
*
*
*
*
* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5042411247457773"
     crossorigin="anonymous"></script>
<!-- lateral_ads -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-5042411247457773"
     data-ad-slot="4419568689"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
*
* */

export class TopAds implements TopAdsImpl {
  id_ads: number = 0;
}
export class LateralPost implements LateralPostImpl {
  value: (Ads | GetNews)[] = [];
}

export class MainPost {
  ids?: { card1: number; card2: number; card3: number } | null;
}

export class Categories {
  c?: Category[] | null;
}

export async function getSettingsAll() {}

export async function getSettings<
  T extends TopAds | LateralPost | MainPost | Categories
>(instancie: { new (): T }) {
  let ins = new instancie();

  if (ins instanceof TopAds) {
    const res: Config<T> = (await Ex.api().get("/settings/name/topads")).data;
    return res;
  }

  if (ins instanceof LateralPost) {
    const res: Config<T> = (await Ex.api().get("/settings/name/lpost")).data;
    return res;
  }

  if (ins instanceof MainPost) {
    const res: Config<T> = (await Ex.api().get("/settings/name/mainpost")).data;
    return res;
  }

  if (ins instanceof MainPost) {
    const res: Config<T> = (await Ex.api().get("/settings/name/category_list"))
      .data;
    return res;
  }

  return null;
}

import {LateralPostImpl, TopAdsImpl,Config} from "@/dtos/Settings";
import {Ads} from "@/dtos/Ads";
import {GetNews} from "@/dtos/News";
import {Ex} from "@/extension/ex";


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
export class LateralPost implements LateralPostImpl{
    value: (Ads | GetNews)[] = []
}



export async  function getSettingsAll() {

}

export  async  function  getSettings<T extends TopAds | LateralPost>(instancie:{new (): T}) {
    let ins = new instancie()

    if (ins instanceof TopAds) {
         const res : Config<T>   =  ( await Ex.apiClient().get("api/settings/topads") ).data
        return  res
    }

    if (ins instanceof LateralPost) {
        const res : Config<T>   =  ( await Ex.apiClient().get("api/settings/lpost") ).data
        return  res
    }

    return  null
}
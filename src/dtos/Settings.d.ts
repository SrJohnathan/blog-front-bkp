import {Ads} from "@/dtos/Ads";
import {GetNews} from "@/dtos/News";


export interface TopAdsImpl {
    id_ads: number;
}
export interface LateralPostImpl {
    value: {typ:string , id:number}[] | undefined ;
}
export interface Config<T> {
    id: number;
    name: string
    data: T
}
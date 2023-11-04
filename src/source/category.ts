import {Ex} from "@/extension/ex";
import {Category, CategoryImp} from "@/dtos/Category";


export async function getCategory(id:string | number,str:string){

    let category : Category =  {active: false, id: 0, name: ""}
    try {
        const  res :CategoryImp = ( await Ex.apiClient().get(`/api/category/${id}`) ).data
        switch (str) {
            case "pt"  : category.name = res.name_pt; break;
            case "en"  : category.name = res.name_en; break;
            case "es"  : category.name = res.name_es; break;
            case "fr"  : category.name = res.name_fr; break;
        }
        return  category;
    }catch (e) {
        return  null
    }

}
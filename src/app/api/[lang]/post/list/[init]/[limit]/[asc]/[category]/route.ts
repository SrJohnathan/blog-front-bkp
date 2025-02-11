import {Ex} from "@/extension/ex";


export async function GET(req: Request,{ params }: { params: { lang: string ,init:string,limit:string ,asc:string ,category:string} }) {
    const  locale = params.lang[0].toUpperCase() + params.lang.substring(1);
    const  response = await  Ex.api().get(`/post/${locale}/list/${params.init}/${params.limit}/${params.asc}/${params.category}`);
    return   Response.json(response.data)
}

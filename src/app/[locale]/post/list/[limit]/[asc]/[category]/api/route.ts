import {Ex} from "@/extension/ex";


export async function GET(req: Request,{ params }: { params: { locale: string ,limit:string ,asc:string ,category:string} }) {

    "pt"
    params.locale

    const  locale = params.locale[0].toUpperCase() + params.locale.substring(1);

    const  response = await  Ex.api().get(`/${locale}/post/list/${params.limit}/${params.asc}/${params.category}`);
    return  new Response(  response.data)
}

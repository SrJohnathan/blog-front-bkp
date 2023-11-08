import {Ex} from "@/extension/ex";


export async function GET(req: Request,{ params }: { params: { lang: string ,limit:string ,category:string} }) {
    const  locale = params.lang[0].toUpperCase() + params.lang.substring(1);
    const  response = await  Ex.api().get(`/post/${locale}/audio/${params.limit}/${params.category}`);
    return   Response.json(response.data)
}
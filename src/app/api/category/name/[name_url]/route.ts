import {Ex} from "@/extension/ex";


export async function GET(req: Request,{ params }: { params: { name_url: string }}) {
    const  response = await  Ex.api().get(`/category/name/${params.name_url}`);
    return  Response.json( response.data)
}
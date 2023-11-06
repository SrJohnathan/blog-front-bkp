import {Ex} from "@/extension/ex";


export async function GET(req: Request,{ params }: { params: { name: string }}) {
    const  response = await  Ex.api().get(`/settings/name/${params.name}`);
    return  Response.json( response.data)
}
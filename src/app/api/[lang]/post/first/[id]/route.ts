import {Ex} from "@/extension/ex";


export async function GET(req: Request,{ params }: { params: { id: string }}) {
    const  response = await  Ex.api().get(`/post/first/${params.id}`);
    return  Response.json( response.data)
}
import {Ex} from "@/extension/ex";


export async function GET(req: Request) {
    const  response = await  Ex.api().get(`/category`);
    return  Response.json( response.data)
}
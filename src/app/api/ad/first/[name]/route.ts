import {Ex} from "@/extension/ex";


export async function GET(req: Request,{ params }: { params: { name: string }}) {



        const  response = await  Ex.api().get(`/ads/first/${params.name}`);



        return  Response.json( response.data)
}

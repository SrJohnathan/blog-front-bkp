import {Ex} from "@/extension/ex";


export async function GET(req: Request,{ params }: { params: { lang: string } }) {
    return  new Response( params.lang)
}

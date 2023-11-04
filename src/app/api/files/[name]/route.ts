import {Ex} from "@/extension/ex";


export async function GET(req: Request,{ params }: { params: { name: string }}) {
    return  new Response(Ex.formatLoadUrl(params.name))
}

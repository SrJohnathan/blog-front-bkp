import {Ex} from "@/extension/ex";
import * as fs from "fs";
import axios from "axios";


export async function GET(req: Request,{ params }: { params: { name: string }}) {
    const url = Ex.formatLoadUrl(params.name);
    try {
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        const contentType = response.headers['content-type'] || 'application/octet-stream';
        return new Response(response.data, { headers: { 'Content-Type': contentType } });
    } catch (error) {
        console.error(error);
        return new Response('File not found', { status: 404 });
    }
}



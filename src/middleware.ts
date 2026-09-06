import type { APIContext } from "astro";


export async function onRequest(context: APIContext, next: () => Promise<Response>) {
   
    return next();
}

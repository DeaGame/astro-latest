import { finalize } from '@astrojs/cloudflare/fetch';
import { handle } from '@astrojs/cloudflare/handler';
import { astro, FetchState } from 'astro/fetch';

// Entrypoint di tutte le richieste
export default {
    async fetch(request, env, ctx) {
    const state = new FetchState(request);

    return finalize(state, await astro(state));
    },
} satisfies ExportedHandler<Env>;
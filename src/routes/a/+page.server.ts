import type { PageServerLoad } from './$types';

export const load = (async ({ request, platform  }: any) => {
    return {
        "status": request,
        "platform": platform
    };
}) satisfies PageServerLoad;
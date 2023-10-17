import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
        "status": 200,
    };
}) satisfies PageServerLoad;
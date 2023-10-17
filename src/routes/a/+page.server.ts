import type { PageServerLoad } from './$types';

export const load = (async (a: any, b: any, c: any) => {
    return {
        "status": 200,
        "a": a,
        "b": b,
        "c": c
    };
}) satisfies PageServerLoad;
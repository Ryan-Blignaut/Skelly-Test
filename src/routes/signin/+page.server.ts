import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ request, platform }) => {
    console.log("signin/+page.server.ts: load()");
    console.log("locals:", request);
    console.log("locals:", platform);
};

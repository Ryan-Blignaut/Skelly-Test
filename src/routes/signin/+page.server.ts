import type { PageServerLoad } from './$types';
import { db } from "$lib/server/database";

export const load: PageServerLoad = async ({ request, platform }) => {

	await db.sync();
	console.log('signin/+page.server.ts: load()');
	console.log('locals:', request);
	console.log('locals:', platform);
	return request;
};

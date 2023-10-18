import { fruits } from '$lib/server/schema';
import { db } from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (/*{ params }*/) => {
	const frui = await db.select().from(fruits).run();
	console.log(frui.rows);
	return {
		fruits: frui.rows
	};
};

import type { PageServerLoad } from './$types';
import { db } from '$lib/server/database';

export const load: PageServerLoad = async () => {
	const resultSet = await db.execute('Select * from degree');
	return { rows: resultSet.rows };
};

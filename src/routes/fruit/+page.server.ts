import type { PageServerLoad } from './$types';
import { db } from '$lib/server/database';

export const load: PageServerLoad = async () => {
	const resultSet = await db.execute('Select * from fruits');
	console.log('Fruits: ', resultSet.rows);
	return { rows: resultSet.rows };
};

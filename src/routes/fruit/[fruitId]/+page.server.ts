import type { PageServerLoad } from './$types';
import { db } from '$lib/server/database';

export const load: PageServerLoad = async ({ params }) => {
	const getFruit = async (id: string) => {
		const resultSet = await db.execute(`Select * from fruits where id = '${id}'`);
		return resultSet.rows[0];
	};

	return { rows: getFruit(params.fruitId) };
};

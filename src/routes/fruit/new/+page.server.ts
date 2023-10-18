import type { Actions } from './$types';
import type { RequestEvent } from '@sveltejs/kit';
import { db } from '$lib/server/database';

export const actions = {
	default: async (event: RequestEvent) => {
		const formData = await event.request.formData();
		const id = formData.get('test1');
		const name = formData.get('info');
		const resultSet = await db.execute(`INSERT INTO fruits (id, name) VALUES ('${id}', '${name}')`);
		return { success: resultSet.rowsAffected === 1 };
	}
} satisfies Actions;

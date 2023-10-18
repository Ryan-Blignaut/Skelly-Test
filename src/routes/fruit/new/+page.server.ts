import type { Actions } from './$types';
import type { RequestEvent } from '@sveltejs/kit';
import { fruits, type InsertFruit } from '$lib/server/schema';
import { db } from '$lib/server/database';

export const actions = {
	default: async (event: RequestEvent) => {
		event.cookies.set('session', '123');
		const formData = await event.request.formData();
		const test1 = formData.get('test1');
		const sel = formData.get('sel');
		const info = formData.get('info');
		console.log(test1, sel, info);
		// db.select().from(fruits).where(eq(fruits.name, 'Apple')).run();
		// await db
		// 	.insert(fruits)
		// 	.values({ name: 'Apple' })
		// 	.returning();

		const newFruit: InsertFruit = {
			id: '1',
			name: 'Apple'
		};
		const result = db.insert(fruits).values(newFruit).run();

		result
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
		return { success: true };
	}
} satisfies Actions;

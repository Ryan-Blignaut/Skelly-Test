import { sqliteTable, text, uniqueIndex } from 'drizzle-orm/sqlite-core';
import type { InferInsertModel, InferSelectModel } from 'drizzle-orm';

export const fruits = sqliteTable(
	'fruits',
	{
		id: text('id').primaryKey(),
		name: text('name')
	},
	(fruits) => ({
		nameIdx: uniqueIndex('name_idx').on(fruits.name)
	})
);
export type Fruit = InferSelectModel<typeof fruits>;
export type InsertFruit = InferInsertModel<typeof fruits>;

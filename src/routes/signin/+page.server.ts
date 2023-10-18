import type { PageServerLoad } from './$types';
import { db } from '$lib/server/database';

export const load: PageServerLoad = async ({ request, platform }) => {
	const { rows } = await db.execute(`
      SELECT count(*) AS num_tables FROM sqlite_master
      WHERE type ='table' AND name NOT IN ('libsql_wasm_func_table','_litestream_seq','_litestream_lock')
    `);

	const numTables = rows[0].num_tables;

	console.log('signin/+page.server.ts: load()');
	console.log('locals:', request);
	console.log('locals:', platform);
	return numTables;
};

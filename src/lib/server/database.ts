import { createClient } from '@libsql/client/web';
import { drizzle } from 'drizzle-orm/libsql';
import * as dotenv from 'dotenv';

dotenv.config();

export function getDb() {
	const client = createClient({
		url: process.env.SECRET_TURSO_DATABASE_URL || 'libsql://skelly-db-st10092012.turso.io',
		authToken: process.env.SECRET_TURSO_AUTH_TOKEN
	});
	return drizzle(client);
}

export const db = getDb();

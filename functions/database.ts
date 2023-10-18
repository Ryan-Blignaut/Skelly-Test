import { createClient } from '@libsql/client/web';
import { drizzle } from 'drizzle-orm/libsql';
export const db = createClient({
	url: process.env.SECRET_TURSO_DATABASE_URL || 'libsql://skelly-db-st10092012.turso.io',
	authToken: process.env.SECRET_TURSO_AUTH_TOKEN
});
export const db1 = drizzle(db);



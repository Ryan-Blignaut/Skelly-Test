import { createClient } from '@libsql/client/web';

export const db = createClient({
	url: process.env.SECRET_TURSO_DATABASE_URL || 'libsql://skelly-db-st10092012.turso.io',
	authToken: process.env.SECRET_TURSO_AUTH_TOKEN
});

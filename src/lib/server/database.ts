import { createClient } from '@libsql/client/web';
import { drizzle } from 'drizzle-orm/libsql';
import { SECRET_TURSO_DATABASE_URL, SECRET_TURSO_AUTH_TOKEN } from '$env/static/private';

export const client = createClient({
	url: SECRET_TURSO_DATABASE_URL,
	authToken: SECRET_TURSO_AUTH_TOKEN
});

export const db = drizzle(client);
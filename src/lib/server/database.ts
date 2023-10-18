import { createClient } from '@libsql/client/web';
import { drizzle } from 'drizzle-orm/libsql';
// import { SECRET_TURSO_DATABASE_URL, SECRET_TURSO_AUTH_TOKEN } from '$env/static/private';
// import { env } from '$env/dynamic/private';
import * as dotenv from 'dotenv';

dotenv.config();
export const client = createClient({
	url: process.env.SECRET_TURSO_DATABASE_URL || '',
	authToken: process.env.SECRET_TURSO_AUTH_TOKEN
});

export const db = drizzle(client);

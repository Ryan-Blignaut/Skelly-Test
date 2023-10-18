import { createClient } from '@libsql/client/web';
import { env } from '$env/dynamic/private';

export const db = createClient({
	url: env.SECRET_TURSO_DATABASE_URL as string,
	authToken: env.SECRET_TURSO_AUTH_TOKEN as string
});

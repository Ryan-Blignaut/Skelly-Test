import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config();

export default {
	schema: './src/lib/server/schema.ts',
	out: './migrations',
	driver: 'turso',
	dbCredentials: {
		url: process.env.SECRET_TURSO_DATABASE_URL || '',
		authToken: process.env.SECRET_TURSO_AUTH_TOKEN || ''
	}
} satisfies Config;

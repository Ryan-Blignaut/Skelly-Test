import { migrate } from 'drizzle-orm/libsql/migrator';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client/web';
import * as dotenv from 'dotenv';

dotenv.config();

async function main() {
	const db = drizzle(
		createClient({
			url: process.env.SECRET_TURSO_DATABASE_URL || '',
			authToken: process.env.SECRET_TURSO_AUTH_TOKEN
		})
	);

	console.log('Running migrations');

	await migrate(db, { migrationsFolder: 'migrations' });

	console.log('Migrated successfully');

	process.exit(0);
}

main().catch((e) => {
	console.error('Migration failed');
	console.error(e);
	process.exit(1);
});

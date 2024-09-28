import { migrate } from 'drizzle-orm/neon-http/migrator';
import { db } from './db';
import { config } from 'dotenv';

config({
	path: '.dev.vars',
});
async function main() {
	try {
		await migrate(db, { migrationsFolder: 'drizzle' });
		console.log('Migration complete');
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
}

main();

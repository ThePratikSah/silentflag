import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { config } from 'dotenv';

config({
	path: '.dev.vars',
});
const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
	throw new Error('DATABASE_URL is not defined');
}

const sql = neon(dbUrl);
export const db = drizzle(sql);

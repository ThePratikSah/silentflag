import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './db/schema';
import users from './users';
import { customLogger } from './utils/logger';

export type Env = {
	DATABASE_URL: string;
};

const app = new Hono<{ Bindings: Env }>();
app.use(logger(customLogger));

app.use(async (c, next) => {
	const databaseUrl = c.env.DATABASE_URL;
	const sql = neon(databaseUrl);
	const db = drizzle(sql, { schema });
	(c.set as (key: string, value: unknown) => void)('db', db);
	await next();
});

app.route('/users', users);

app.onError((err, c) => {
	customLogger(`${err}`);
	return c.text('Something went wrong', 500);
});

export default app;

import { NeonHttpDatabase } from 'drizzle-orm/neon-http';
import { Hono } from 'hono';
import * as schema from './db/schema';

const app = new Hono();

app.get('/', async (c) => {
	const db = c.get('db') as NeonHttpDatabase<typeof schema>;
	const usersData = await db
		.select({
			uuid: schema.users.id,
			name: schema.users.name,
			email: schema.users.email,
		})
		.from(schema.users);
	return c.json(usersData);
});
app.post('/', (c) => c.json('create an author', 201));
app.get('/:id', (c) => c.json(`get ${c.req.param('id')}`));

export default app;

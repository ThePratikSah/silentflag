# Database connection
To reuse the database connection, we have made a middleware that will be used to connect to the database. This middleware will be used in all the routes that require a database connection.

## Import
```ts
import { neon } from '@neondatabase/serverless';
import { drizzle, NeonHttpDatabase } from 'drizzle-orm/neon-http';
```

## Middleware
```ts
app.use(async (c, next) => {
	const databaseUrl = c.env.DATABASE_URL;
	const sql = neon(databaseUrl);
	const db = drizzle(sql, { schema });
	(c.set as (key: string, value: unknown) => void)('db', db);
	await next();
});
```
## Usage
```ts
app.get('/', async (c, next) => {
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
```

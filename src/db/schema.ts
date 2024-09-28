import { sql } from 'drizzle-orm';
import { pgTable, text, uuid } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
	id: uuid('uuid').default(sql`gen_random_uuid()`),
	name: text('name').notNull(),
	email: text('email').notNull(),
});

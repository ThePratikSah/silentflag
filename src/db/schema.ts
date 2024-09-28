import { pgTable, text, uuid } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
	id: uuid('uuid1').defaultRandom().notNull(),
	name: text('name').notNull(),
	email: text('email').notNull(),
});

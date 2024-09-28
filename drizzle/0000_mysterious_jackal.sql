CREATE TABLE IF NOT EXISTS "users" (
	"uuid" uuid DEFAULT gen_random_uuid(),
	"name" text NOT NULL,
	"email" text NOT NULL
);

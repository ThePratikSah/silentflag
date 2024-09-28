CREATE TABLE IF NOT EXISTS "users" (
	"uuid1" uuid DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL
);

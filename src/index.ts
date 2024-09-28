import { Hono } from 'hono';

export type Env = {
	DATABASE_URL: string;
};

const app = new Hono<{ Bindings: Env }>();

app.get('/', (c) => c.text('Hono!'));
app.get('/hello', (c) => {
	const database = c.env.DATABASE_URL;
	return c.text(`Hello, ${database}!`);
});

export default app;

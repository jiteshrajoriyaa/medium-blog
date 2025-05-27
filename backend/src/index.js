import { Hono } from 'hono';
import { userRouter } from './router/userRouter';
import { blogRouter } from './router/blogRouter';
import { cors } from 'hono/cors';
// Create the main Hono app
const app = new Hono();
app.use('/api/*', cors());
app.route("/api/v1/user", userRouter);
app.route("api/v1/blog", blogRouter);
export default app;

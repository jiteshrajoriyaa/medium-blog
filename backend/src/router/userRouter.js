import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from 'hono/jwt';
import { signinInput, signupInput } from "@jiteshrajoriya/medium-blog-common";
export const userRouter = new Hono();
userRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            msg: "Inputs are wrong"
        });
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password,
                name: body.name,
            },
        });
        const token = await sign({ id: user.id,
            name: user.name
        }, c.env.JWT_SECRET);
        return c.json({
            token: token
        });
    }
    catch (e) {
        console.log(e);
        c.status(403);
        return c.json({
            error: "Error while sigining up"
        });
    }
});
userRouter.post('/signin', async (c) => {
    try {
        const body = await c.req.json();
        const { success } = signinInput.safeParse(body);
        if (!success) {
            c.status(411);
            return c.json({
                msg: "Inputs are wrong"
            });
        }
        const prisma = new PrismaClient({
            datasourceUrl: c.env?.DATABASE_URL,
        }).$extends(withAccelerate());
        const user = await prisma.user.findUnique({
            where: {
                email: body.email,
                password: body.password
            }
        });
        if (!user) {
            c.status(403);
            return c.json({ error: "user not found" });
        }
        const token = await sign({ id: user.id,
            name: user.name
        }, c.env.JWT_SECRET);
        return c.json({ token });
    }
    catch (e) {
        c.status(403);
        return c.json({ error: "error while signing in" });
    }
});

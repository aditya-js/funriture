import * as Router from "koa-router";

const router = new Router({
  prefix: "/api",
});

router.get("/health", async (ctx, next) => {
  try {
    ctx.body = { msg: "Success" };
  } catch (e) {
    await next();
  }
});

export default router;

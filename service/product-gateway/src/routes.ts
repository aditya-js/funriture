import * as Router from "koa-router";
import {
  createProductCategory,
  createProduct,
  getProductCategories,
} from "./products/product.controller";

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

router.post("/product/createProductCategory", createProductCategory);
router.post("/product/createProduct", createProduct);
router.get("/product/getCategories", getProductCategories);

export default router;

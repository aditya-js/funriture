const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/api/user",
  createProxyMiddleware({
    target: "http://localhost:8081/api/user",
  })
);

app.use(
  "/api/product",
  createProxyMiddleware({
    target: "http://localhost:8081/api/product",
  })
);

app.listen(8001);

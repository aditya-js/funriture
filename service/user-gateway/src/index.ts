import * as Koa from 'koa';
import * as logger from 'koa-logger';
import * as json from 'koa-json';
import * as bodyParser from 'koa-bodyparser';
import * as cors from '@koa/cors';
import * as dotenv from 'dotenv';
import router from './routes';

const app = new Koa();

// Middlewares
app.use(json());
app.use(logger());
app.use(bodyParser());
app.use(cors());

// Routes
app.use(router.routes()).use(router.allowedMethods());
app.use(async (ctx, next) => {
  ctx.type = 'application/json';
});

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log('app started');
});

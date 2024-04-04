import * as Router from 'koa-router';
import {
  getAllUsers,
  createUser,
  getUserById,
  getUserByEmailId,
} from './user/user.controller';

const router = new Router({
  prefix: '/api',
});

router.get('/health', async (ctx, next) => {
  try {
    ctx.body = { msg: 'Success' };
  } catch (e) {
    await next();
  }
});

router.get('/user/getUsers', getAllUsers);
router.post('/user/create', createUser);
router.get('/user/getUser/:id', getUserById);
router.post('/user/getUserByEmail', getUserByEmailId);

export default router;

import { UserSchema } from '../db/schema/user-schema';
import { UserDto } from '../dto/user-dto';
import * as bcrypt from 'bcrypt';

export const getAll = async () => {
  const data = await UserSchema.find();

  return data;
};

export const create = async (user: UserDto) => {
  const dbUser = { ...user };
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  dbUser.password = hash;
  const data = await UserSchema.create(dbUser);

  return data;
};

export const getUser = async (id: string) => {
  const user = await UserSchema.findById(id);

  return user;
};

export const getUserByEmail = async (
  email: string,
  isPass: boolean = false,
) => {
  if (isPass)
    return await UserSchema.findOne({ email: email }).select('+password');
  else return await UserSchema.findOne({ email: email });
};

export const login = async (email: string, plainPass: string) => {
  const user = await getUserByEmail(email, true);
  if (user) {
    const { password, ...userInfo } = user['_doc'];
    const isValid = await bcrypt.compare(plainPass, password);
    if (isValid) return userInfo;
    else throw new Error('password not correct');
  }
  throw new Error('Email not registered');
};

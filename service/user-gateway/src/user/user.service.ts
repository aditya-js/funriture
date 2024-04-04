import { UserSchema } from '../db/schema/user-schema';
import { UserDto } from '../dto/user-dto';

export const getAll = async () => {
  const data = await UserSchema.find();

  return data;
};

export const create = async (user: UserDto) => {
  const data = await UserSchema.create(user);

  return `User create successfully, UserId: ${data._id?.toString()}`;
};

export const getUser = async (id: string) => {
  const user = await UserSchema.findById(id);

  return user;
};

export const getUserByEmail = async (email: string) => {
  const user = await UserSchema.findOne({ email: email });
  console.log(user);
  if (user) return user;
  else {
    return {
      msg: 'User Not Found',
    };
  }
};

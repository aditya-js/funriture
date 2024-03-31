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

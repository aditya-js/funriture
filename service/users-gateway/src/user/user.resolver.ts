import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from '../gql/user.schema';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => [User])
  async getAllUsers(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }
}

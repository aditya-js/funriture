import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserService, User } from './user.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => User)
  getUser(@Args('id') id: number): any {
    return this.userService.getUser(id);
  }
}

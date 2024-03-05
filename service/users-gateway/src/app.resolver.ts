import { Args, Query, Resolver } from '@nestjs/graphql';
import { AppService, User } from './app.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly appService: AppService) {}

  @Query((returns) => User)
  getUser(@Args('id') id: number): any {
    return this.appService.getUser(id);
  }
}

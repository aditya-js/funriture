import { Injectable } from '@nestjs/common';
import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id: number;
  @Field()
  name: string;
}

const data: User[] = [
  {
    id: 1,
    name: 'John',
  },
  {
    id: 2,
    name: 'Jane',
  },
  {
    id: 3,
    name: 'Jim',
  },
];

@Injectable()
export class UserService {
  getUser(id: number): User {
    return data.find((user) => user.id === id);
  }
}

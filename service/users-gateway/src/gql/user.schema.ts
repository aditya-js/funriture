import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
class Address {
  @Field()
  address1: string;
  @Field()
  address2: string;
  @Field()
  pincode: number;
}

@ObjectType()
export class User {
  @Field()
  uuid: string;
  @Field()
  name: string;
  @Field()
  dob: number;
  @Field()
  address: Address;
  @Field()
  city: string;
  @Field()
  email: string;
  @Field()
  contact: number;
  @Field()
  password: string;
}

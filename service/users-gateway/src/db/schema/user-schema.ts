import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
class Address {
  @Prop()
  address1: string;
  @Prop()
  address2: string;
  @Prop()
  pincode: number;
}

@Schema()
export class User {
  @Prop()
  uuid: string;
  @Prop()
  name: string;
  @Prop()
  dob: number;
  @Prop(Address)
  address: Address;
  @Prop()
  city: string;
  @Prop()
  email: string;
  @Prop()
  contact: number;
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

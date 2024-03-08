import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User as UserCollection } from 'src/db/schema/user-schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserCollection.name)
    private userModel: mongoose.Model<UserCollection>,
  ) {}

  async getAllUsers(): Promise<UserCollection[]> {
    return await this.userModel.find();
  }
}

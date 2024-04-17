import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const mongoDBPass = process.env.MONGO_PASS;

const settings = {
  dbName: 'funriture',
};

mongoose.connect(
  `mongodb+srv://adimvc:${mongoDBPass}@cluster0.ty7cuyt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
  settings,
);

export default mongoose;

import mongoose from 'mongoose';

const settings = {
  dbName: 'funriture',
};

mongoose.connect(
  'mongodb+srv://adimvc:funriture@cluster0.ty7cuyt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  settings,
);

export default mongoose;

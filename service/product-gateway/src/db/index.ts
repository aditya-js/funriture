import mongoose from "mongoose";

export function setupDB(cb) {
  const settings = {
    dbName: "funriture",
  };

  mongoose.connect(
    "mongodb+srv://adimvc:funriture@cluster0.ty7cuyt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    settings
  );
  cb();
}

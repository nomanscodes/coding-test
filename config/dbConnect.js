import mongoose from "mongoose";

const DB_URL = "mongodb://0.0.0.0:27017/next13-auth";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) return;
  mongoose.connect(DB_URL);
};

export default dbConnect;

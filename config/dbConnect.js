import mongoose from "mongoose";

const DB_URI = "mongodb://127.0.0.1/next13-auth";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) return;
  mongoose.connect(DB_URI);
};

export default dbConnect;

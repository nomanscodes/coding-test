import mongoose from "mongoose";

const DB_URL = process.env.DB_URL;

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) return;
  mongoose.connect(DB_URL);
};

export default dbConnect;

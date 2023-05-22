import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) return;
  mongoose.connect("mongodb://127.0.0.1/next13-auth");
};

export default dbConnect;

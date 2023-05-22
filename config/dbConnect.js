import mongoose from "mongoose";

const db_url = "mongodb://127.0.0.1/next13-auth";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) return;
  mongoose.connect(db_url);
};

export default dbConnect;

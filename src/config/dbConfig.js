import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("db connected successfully");
  } catch (error) {
    console.log("error in connecting db", error.message);
    process.exist(1);
  }
};

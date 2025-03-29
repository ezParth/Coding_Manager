import mongoose from "mongoose";
import dotenv from "dotenv";
import path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../config/.env") });
// console.log("MONGO_URI",process.env.MONGO_URI)

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("database connected!")
  } catch (error) {
    console.log("Error during database connection!", error);
  }
};

export default connectDB;

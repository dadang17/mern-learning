import mongoose, { mongo } from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MONGODB CONNECTED");
  } catch (error) {
    console.error("error connecting to mongoDB", error);
    process.exit(1);
  }
};

import mongoose from "mongoose";

export const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: "EcommerceNextjs",
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const disconnectdb = async () => {
  try {
    await mongoose.disconnect();
  } catch (error) {
    console.log((error as Error).message);
  }
};

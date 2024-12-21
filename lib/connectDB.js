import mongoose from "mongoose";

export async function connectDB() {
  try {
    let connection = mongoose.connect(process.env.MONGODB_URI);
    console.info("Mongodb Connected " + process.env.MONGODB_URI);
  } catch (err) {
    console.log("err in connection=>", err);
  }
}

import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://singhanurag1309:wyxADhogJhiqJUT0@cluster0.jpnt5.mongodb.net/food-del"
    )
    .then(() => {
      console.log("DB connected");
    });
};

import mongoose from "mongoose";

const TestSchema = new mongoose.Schema(
  { message: String },
  { timestamps: true }
);

export default mongoose.model("Test", TestSchema);

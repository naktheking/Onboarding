import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import messageRoutes from "./routes/messages.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

//Routes_____________________
app.use("/api", messageRoutes);

app.get('/', async (req, res) => {
  console.log("Good Job");
})
//__________________________________________________


async function startServer() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB Atlas");
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }

}
startServer();

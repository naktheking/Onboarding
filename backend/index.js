import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

//__________________________________________________
import Test from "./models/Test.js";

app.post("/api/test-insert", async (req, res) => {
  const doc = await Test.create({ message: "Hello from backend" });
  res.json(doc);
});
//__________________________________________________


async function startServer() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB Atlas");

    app.get("/api/health", (req, res) => {
      res.json({ ok: true });
    });

    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
}

startServer()

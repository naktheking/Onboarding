import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

router.get("/testRoutes", async (req, res) => {
  try {
    const doc = await Message.create(
      { message: "Sarah said something crazy", 
        person: "Samith"
      });
    res.json(doc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


export default router;
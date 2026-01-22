import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

router.post("/sendMessage", async (req, res) => {
  try {
    console.log("made it");
    const { message, person } = req.body;
    console.log("made it 2", message, person);
    const doc = await Message.create({ message, person });
    console.log("made it 3");
  
    res.json(doc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
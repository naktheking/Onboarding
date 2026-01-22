import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

router.post("/sendMessage", async (req, res) => {
  try {
    const { message, person } = req.body;
    const doc = await Message.create({ message, person });
  
    res.json(doc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/getMessage", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    //this gets all the messages but newest comes first
    // const messages = await Message.find();
    //this gets all the messages
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


export default router;
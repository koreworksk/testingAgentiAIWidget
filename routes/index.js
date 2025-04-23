const express = require("express");
const router = express.Router();
const messageService = require("../services/messageService");

router.post("/api/agent-message", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const response = await messageService.processMessage(message);
    return res.json({ response });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;

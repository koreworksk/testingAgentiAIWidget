const express = require("express");
const router = express.Router();
const messageService = require("../services/messageService");

router.post("/api/agent-message", async (req, res) => {
  const { message } = req.body;
  console.log("received the api request");

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const response = await messageService.processMessage(message); // 🔁 Waits for response
    return res.json({ response }); // ✅ Respond only after API call is complete
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;

const axios = require('axios');

async function processMessage(message) {
  console.log("this is the message", message);

  const data = JSON.stringify({
    sessionIdentity: [
      { type: "userReference", value: "your-user-reference" },
      { type: "sessionReference", value: "your-session-reference" }
    ],
    input: [
      { type: "text", content: message }
    ],
    stream: {
      enable: false,
      streamMode: "tokens"
    },
    debug: { enable: false }
  });

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://agent-platform.kore.ai/api/v2/apps/aa-b73dd416-6b4a-4199-b479-d2301c945972/environments/stagging/runs/execute',
    headers: { 
      'x-api-key': 'kg-28835835-d7e4-41fc-961b-95290ce05e9c.663918aa-1b28-4e79-b7f3-642eb26a49ea', 
      'Content-Type': 'application/json'
    },
    data: data
  };

  try {
    const response = await axios.request(config);
    console.log("✅ this is response:", response.data?.output?.[0]?.content);
    return response.data?.output?.[0]?.content;
  } catch (error) {
    console.error("❌ Error in API call:", error.message);
    throw new Error("API is not working, please bear with us.");
  }
}

module.exports = { processMessage };

const axios = require('axios');

async function processMessage(message) {
  // Simulate an external API call using the message
let data = JSON.stringify({
  "sessionIdentity": [
    {
      "type": "userReference",
      "value": "your-user-reference"
    },
    {
      "type": "sessionReference",
      "value": "your-session-reference"
    }
  ],
  "input": [
    {
      "type": "text",
      "content": message
    }
  ],
  "stream": {
    "enable": false,
    "streamMode": "tokens"
  },
  "debug": {
    "enable": false
  }
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://agent-platform.kore.ai/api/v2/apps/aa-b73dd416-6b4a-4199-b479-d2301c945972/environments/draft/runs/execute',
  headers: { 
    'x-api-key': 'kg-81fc14c0-e961-4adf-972b-10f87d8087cb.79b08e68-37d1-4f88-9257-2ab5528eb78a', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response?.output?.[0]?.content));
  return response?.output?.[0]?.content;
})
.catch((error) => {
  console.log(error);
  return "API is not working please bear us"
});

  const response = `Processed message from agent: "${message}"`;
  
}

module.exports = { processMessage };

async function processMessage(message) {
  // Simulate an external API call using the message
  const response = `Processed message from agent: "${message}"`;
  return response;
}

module.exports = { processMessage };

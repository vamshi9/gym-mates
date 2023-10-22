const accountSid = 'accountSid';
const authToken = 'authToken';
const client = require('twilio')(accountSid, authToken);

module.exports.sendMessage = async (event, context) => {
  // const requestBody = JSON.parse(event.body);
  console.log(event);

  const clientMessages = await client.messages.create({
    body: 'Your appointment is coming up on July 21 at 3PM',
    from: 'whatsapp:+twilioNumber',
    to: 'whatsapp:+userNumber',
  });
  console.log(clientMessages);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Message Sent' }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

const serverlessExpress = require('@vendia/serverless-express');
const app = require('./app');

const serverlessExpressInstance = serverlessExpress({ app });

exports.handler = serverlessExpressInstance;

exports.registerSubscriptions = async (event, context) => {
  // Parse the request body
  //   const requestBody = JSON.parse(event.body);

  // Perform subscription registration logic
  // Replace this with your actual implementation
  const responseMessage = `Subscription registered for Sainath`;

  // Return an API Gateway-compatible response
  return {
    statusCode: 200,
    body: JSON.stringify({ message: responseMessage }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

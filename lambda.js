const serverlessExpress = require('@vendia/serverless-express');
const app = require('./app');
const { default: registerUser } = require('./functions/register-users');

const serverlessExpressInstance = serverlessExpress({ app });

exports.handler = serverlessExpressInstance;

exports.registerSubscriptions = registerUser;

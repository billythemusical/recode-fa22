// never use sensitive api keys in your code
require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.FROM_NUMBER;
const toNumber = process.env.TO_NUMBER;

const client = require('twilio')(accountSid, authToken);

const message = {
    body: 'Helloooo?',
    from: fromNumber,
    to: toNumber,
}

client.messages.create(message)
    .then(message => console.log(message.sid))
    .done(); // this closes the node process
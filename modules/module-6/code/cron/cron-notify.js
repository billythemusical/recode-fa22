require('dotenv').config()

var cron = require('node-cron')

var Pushover = require('node-pushover');
var push = new Pushover({
	token: process.env.APPTOKEN,
	user: process.env.USERKEY
});

function notify() {
  push.send('Testing Cron', 'Heyyyyyy')
  console.log('message sent!')
}

cron.schedule('*/10 * * * * *', notify) // running every 10 secs

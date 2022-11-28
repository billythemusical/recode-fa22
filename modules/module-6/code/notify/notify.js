require('dotenv').config()

var Pushover = require('node-pushover');
var push = new Pushover({
    token: process.env.APPTOKEN,
    user: process.env.USERKEY
});

push.send("Test Subject", "Heyyy again");

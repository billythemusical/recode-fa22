require('dotenv').config()

var Pushover = require('node-pushover');
var push = new Pushover({
    token: process.env.APPTOKEN
});

// path is a utility for getting local file path names
// it can be added/required without installing as it is a default Node library
var path = require('path');

// Gets the name of the directory where this script is run
// and adds the name of the file we want to send
var filePath = path.join(__dirname, 'recode-icon.png')

// Attach image after subject and message, 
// with callback to handle errors and the response from the API
push.send(process.env.USERKEY, "Test Subject", "Did you get this image?", filePath, handleErrors)

function handleErrors(error, responseFromAPI) {
    if (error) return console.log(error)
    console.log(responseFromAPI)
}
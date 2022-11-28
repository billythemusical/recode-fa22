# Think Globally, Develop Locally

At some point in your coding journey, you may get the itch to develop some type of application that has a life of its own, beyond just a single sketch or web page.  Perhaps that application enables you to collect and store user data in a database, or maybe you want to protect access to the app behind a login page, or maybe you want the app to complete some daily or hourly task like send an email or text...  Whatever the case may be, learning Node.js will be a handy skill to posses. 

*But first...*

### The Command Line Interface

Since Node.js doesn't use a traditional GUI like the web browser, you have to first get familiar with using the Command Line Interface (CLI), aka 'the command line.' On a Mac, the command line is accessed from the Terminal app, which can be found in the Applications folder.  When you open it, you will see the command prompt which may look something like this: 

![A command prompt on the MacOS's Terminal app.](./images/the-command-prompt.jpeg)

What you're seeing is actually an entirely different operating system called Unix that lives on your Mac computer.  Unix has many robust built-in functions that we can call by typing them into the command prompt.  For example, `echo` followed by a string in quotes will simply print out the string to the 'standard output,' the equivalent of the console log.  

We can also pass special 'flags' to functions which are denoted by the addition of a single '-' or double dash '--'.  A common flag that most functions accept is `--help` or `-h` for short. 

>Here is a more lengthy command line tutorial from Sam Lavigne's great course on web scraping called [Scrapism](https://scrapism.lav.io/intro-to-the-command-line/) which also addresses those working in Windows.
---
### Node.js

Node.js is a Javascript framework that allows you to write code that runs on the host computer without the utilization of the browser. In fact, it's output is often just a console log. 

However, unlike the browser, Node is not subject to the same 'sand-boxed' safety limitations regarding the computer's hardware systems and computational resources. 

Node can also perform many specialized tasks like load, edit, and save files; manage complex databases; send emails or text messages (with the help of some useful API's); capture and edit audio and video files; and communicate with a wide variety of host hardware and peripheral devices, including bluetooth, cellular, and wifi devices.

### NPM

Node's real power lies in its built-in open source package manager called [`npm`](https://www.npmjs.com/), which simply stands for **Node Package Manager** (duh).  

`npm` has millions of open source code packages that we can install onto our computer just by typing a few commands.  

>'Installing' here simply means an automated way of doing the manual process we have used already - finding the library we need via a CDN, copying the code, and saving it to a file on our computer.

Node packages are often built on top of other open source packages called **dependencies**.  `npm` helps us manage a list of all of our dependencies in our project in special JSON files called `package.json` and `package-lock.json`.  You'll start to notice these everywhere now. 🙃

Remember our `index.html` file in p5.js?  We included all of the Javascript files we needed in our sketch with `<script>` tags. So you could say that our sketch *depends* on those files being there so we can access p5.js functions like `setup` and `draw`. 

But Node has no use for HTML because it runs outside the browser. It *only* uses Javascript. We include whatever libraries we want directly in our Javascript using a special Node function called `require`.  When `require` is called, it checks the list of libraries that `npm` has installed and makes that code available for us to use (assuming the library is in fact installed and doesn't throw an error!).

```js
var gui = require('dat.gui')
```

### Writing our first Node program

To start a Node project we initialize a new one by saying:
```js
npm init
```
This will prompt a list of questions which `npm` wants to know about the project. In the future, if you just want to leave them all blank or default, you can use the `-y` argument.

Now you'll see the `package.json` file with any of the information you entered as well as the `package-lock.json` file, which won't have much in it, as we haven't installed anything yet. 

The first program we'll write will send a text message with the [Twilio API](https://www.twilio.com/docs/sms/send-messages).  You'll have to create an account first with Twilio if you don't already have one. Then insert your credentials below and run the app.js file with Node!

```js
const accountSid = TWILIO_ACCOUNT_SID;
const authToken = TWILIO_AUTH_TOKEN;
const fromNumber = '+15555551234'
const toNumber = '+15555551234'
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({body: 'Hi there', from: fromNumber, to: toNumber})
      .then(message => console.log(message.sid));
```
### Understanding Servers 
- Frontend vs. Backend, aka Client vs. Server

**Frontend** code is typically consumed by the user, customer, or 'client' in the browser. The name comes from the fact that frontend code is the first thing the user interacts with and is therefore the the 'front end' of your application. 

**Backend** code runs 'in the background' and includes servers, databases, third-party software and any other underlying infrastructure that supports the operation of your app.  

While you may think, "Wait, I haven't written an app yet?!" you'd only be half right.  Most of the backend code we've interacted with thus far has already been developed for us, whether that's Neocities, the VS Code Live Server Extension, or the p5 web editor (just check out the [p5 web editor github repo](https://github.com/processing/p5.js-web-editor)).
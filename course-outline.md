![An Apple II computer with external disk drives is set among a glowing-pink cat, who is lying down on the left, and a multi-colored succulent in a black pot on the right. There is a neon pink grid of perspective squares comprising the floor beneath and low-poly digitized mountain ranges in the background with neon blue trim lines. The words Re:Code are centered at the top in a large white font that is in a stylized digital form.](images/synthwave-wallpaper-neural-medium.jpg)

# <h>Course Outline</h>

### Module 1 - Foundations  
- We will introduce ourselves  
- Go over syllabus
- Go over course outline
- Establish a launching point for learning
- [What is p5.js?](https://creative-coding.decontextualize.com/first-steps/)
- Understanding the latest syntax 
    - Arrow functions, var/let/const
- How do I *do* without `draw`? Using `setTimeout`

📕 **Reading - due before class on Thu Oct 27th:**  
- [Introduction (pgs. 1-41)](./readings/Generative_Design-Introduction.pdf) in [Generative Design](./syllabus.md#textbooks) (don't worry, it's lots of pictures).  Then write a blog post after the reading about your thoughts and inspirations.  
⏱ *Approx. time to complete: 1 hour* 

📌 **Assignment(s) - due before class Thu Oct 27th:**    
- 1. ~~If you have not already, please fill out the [course questionnaire](https://forms.gle/SjubdbgUcNgnVY8g9).  
⏱ *Approx. time to complete: 3 minutes*~~

- 2. Please add your personal blog link to [this form](https://forms.gle/kw5Hh3EJVJwnMAf6A).  
⏱ *Approx. time to complete: 2 minutes*

- 3. Read the [addendum to class 1](./readings/addendum-class-1.md).  Then refactor an existing p5.js sketch using `let`, `const`, and arrow functions `=>`.  Remember not to change the built-in p5 functions though.  Make a blog post of your process with the link to your p5 sketch and turn in your assignment on the [assignment submission form](https://forms.gle/HDGNGaoMaxBRPr2e9).
⏱ *Approx. time to complete: 2 hours* 

✅ *Total time: 3 hrs 2 mins* 

### Module 2 - Advanced Javascript Concepts
- Using Fetch and async/await with try/catch blocks  
- Make API calls with Magic 8 Ball, Giphy
- Using Promises and callbacks 
- Accessing and iterating over object data
    - forEach, for i of items, for i in items
    - Object.keys()
- Managing arrays of objects

📌 **Assignment 📌 - due before next class on Tue Nov 1:**  

Using this [Magic 8 Ball API](https://8ball.delegator.com/), make a Magic 8 Ball interface.  PLease mind the following constraints:
1. There must be a place where the user can type their question.
2. Use `setTimeout` to introduce the idea of waiting and suspense.  There must be some period of anticipation once the question is asked, like an interesting "loading..." screen or dialog.  
3. Use the `fetch` API and `async/await` functions in your API call and set up a `try/catch` block to catch any errors.
4. Display the response from the API.

You can submit your sketch here (link TBD).  
⏱ *Approx. time to complete: 3 hours*  


### Module 3 - Working with the DOM
- [The Document Object Model](https://www.w3schools.com/js/js_htmldom.asp) and p5.js
- Putting a p5 sketch in 'regular' web pages - [Processing Github](https://github.com/processing/p5.js/wiki/Positioning-your-canvas) 
- Using "vanilla JS" - document.getElementById( )
- Using a text editor [VS Code](https://code.visualstudio.com/download) and a local server [p5.vscode](https://marketplace.visualstudio.com/items?itemName=samplavigne.p5-vscode).
- Uploading to the web using [Neocities](https://neocities.org/).

📕 **Reading - due before class on Thu Nov 3rd:**  
- Pick a patterned sketch from these creative coding references - [Roni Kaufman](https://openprocessing.org/user/184331), [takawo](https://openprocessing.org/user/6533?view=sketches&o=48) or feel free to find your own!  The key is to find something that is somewhat understandable at first glance but would also propose a challenge to figure it out completely.
- Print out the code and comment each line with a pencil. See if you can explain what is happening and how, as if the person reading it was a beginner in coding.  Was there something you didn't understand?  What resources did you use to find out about it, i.e. MDN Docs, Stack Overflow, the p5 reference, Google??  Did you learn a new function or technique?  Was the code easy to read or was it cryptic?  Document your process on your blog and write a few paragraphs about your experience.  
⏱ *Approx. time to complete: 1.5 hours* 

📌 **Assignments - due before class due Tue Nov 8th:**    

Taking inspiration from [vintage analog control panels](https://control--panel.com/image/154363919057), imagine a (perhaps completely unrealistic) interface for controlling some thing or someone. Like an interface for making your parents give you whatever you wanted (be nice!) or a control panel for sending commands to the government (IRS, give me money!) or an interface for making a famous person sing you a song (or apologize and get off social media forever!).  
- Start by drawing a quick prototype on paper first.
- Some quick thoughts on design: 
    - Is this interface for you or for others to use?
    - What types of inputs will you use - buttons, text, sliders?  How will the inputs be labeled?  
    - Perhaps your interface has its own voice, like a twisted Siri or Alexa ([p5 speech](https://idmnyu.github.io/p5.js-speech/) anyone?)  
    - Do you want to display a picture or video of what/who you are controlling?  For example, can we pretend to target their location from outer space and what would that look like?  
- Make the interface using a p5 canvas that is placed on an HTML page, using one of the methods we looked at in class. Upload your sketch to your Neocities site that we made in class.  
- Share the link in your blog with any documentation that you'd like to provide about your process.
⏱ *Approx. time to complete: 4 hours* 


### Module 4 - Working with External Libraries

- Green Sock
- dat.GUI
- Tone.js  

[Link to Module 4](./modules/module-4-external-libraries/module-4-external-libraries) class notes.

📌 **Assignment 📌 - due before next class:** 
TBD  
⏱ **Approx. time to complete:** 
TBD

### Module 5 - Working with Pixels  
- Pixel Tutorials [1](https://idmnyu.github.io/p5.js-image/), [2](https://app.spline.design/file/95754110-073c-4370-9bb3-4ed58f22d312)
- Visual effects with Blend Modes  
- p5.js and OpenCV for tracking


📌 **Assignment 📌 - due before next class:** 
TBD  
⏱ **Approx. time to complete:** 
TBD  

### Module 6 - Developing Locally
- Command line interface  
- Send an email  
- Node.js and npm
- git clone...
- VS Code and simple server
- Server on the web with ngrok  

##### 📕 Reading 📕 before next class: 
- Sam Levine's [Intro to the Command Line](https://scrapism.lav.io/intro-to-the-command-line/)  
⏱ *Approx. time to complete:* 1 hour  

##### 📌 Assignment 📌, due before next class:  
- TBD  
⏱ *Approx. time to complete:*  TBD


### Module 7 - Working outside the browser
- Cron to schedule things
- Sending iOS notifications
- Saving a JSON small database using nedb
- Using a simple server and Twilio SMS services
- Using basic browser auth to protect your apps  

📌 **Assignment 📌 - due before next class:** 
TBD  
⏱ **Approx. time to complete:** 
TBD  
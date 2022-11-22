![An Apple II computer with external disk drives is set among a glowing-pink cat, who is lying down on the left, and a multi-colored succulent in a black pot on the right. There is a neon pink grid of perspective squares comprising the floor beneath and low-poly digitized mountain ranges in the background with neon blue trim lines. The words Re:Code are centered at the top in a large white font that is in a stylized digital form.](images/synthwave-wallpaper-neural-medium.jpg)

# <h>Course Outline</h>

## Module 1 - Foundations  

We will first introduce ourselves. Then we go over the syllabus, course outline, how to use the class website, how to contact me, class decorum, etc.

Topics: 
- [What is p5.js?](https://creative-coding.decontextualize.com/first-steps/)
- Understanding the latest syntax - arrow functions, var vs let/const
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

------------------------------------------------
## Module 2 - Advanced Javascript Concepts
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

------------------------------------------------
## Module 3 - Working with the DOM

Topics:
- [The Document Object Model](https://www.w3schools.com/js/js_htmldom.asp) and p5.js
- Putting a p5 sketch in 'regular' web pages - [Processing Github](https://github.com/processing/p5.js/wiki/Positioning-your-canvas) 
- Using "vanilla JS" - document.getElementById( )
- Using a text editor [VS Code](https://code.visualstudio.com/download) and a local server [p5.vscode](https://marketplace.visualstudio.com/items?itemName=samplavigne.p5-vscode).
- Uploading to the web using [Neocities](https://neocities.org/).

[Code from class](./modules/module-3-dom/code/index.html)
- [absolute example](./aboslute/index.html), using `position: absolute`
- [centering-css](./centering-css/html), using `justify` and `align` in css
- [centering-js](./centering-js-1/index.html) using the p5 method `sketchParent(id)`

📕 **Reading - due before class on Thu Nov 3rd:**  
- Pick a patterned sketch from these creative coding references - [Roni Kaufman](https://openprocessing.org/user/184331), [takawo](https://openprocessing.org/user/6533?view=sketches&o=48) or feel free to find your own!  The key is to find something that is somewhat understandable at first glance but would also propose a challenge to figure it out completely.
- Print out the code and comment each line with a pencil. See if you can explain what is happening and how, as if the person reading it was a beginner in coding.  Was there something you didn't understand?  What resources did you use to find out about it, i.e. MDN Docs, Stack Overflow, the p5 reference, Google??  Did you learn a new function or technique?  Was the code easy to read or was it cryptic?  Document your process on your blog and write a few paragraphs about your experience.  
⏱ *Approx. time to complete: 1.5 hours* 

📌 **Assignments - due before class due Thu Nov 10th:**    

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

------------------------------------------------
## Module 4 - Working with External Libraries 

Topics:
- Green Sock for animation
- Tone.js for sound
- dat.GUI for... GUIs!

[Class Notes](./modules/module-4/module-4-external-libraries.html)
 
Code Examples:
- [gsap basics](./modules/module-4/code/gsap/index.html)
- [tone.js](./modules/module-4/code/tone/index.html)
- [tone.js loop](./modules/module-4/code/tone-loop/index.html)
- [dat-gui](./modules/module-4/code/dat-gui/index.html)
- [bouncing-ball-sequencer](./modules/module-4/code/bouncing-ball-sequencer/index.html)

📌 **Assignment 📌 - due Tue Nov 14th:**  
Catch up on old assignments!   

⏱ **Approx. time to complete:**  
Depends on how far behind you are. 🙃 

👾 **Extra Credit:** 👾  
Explore and/or build something with any of the external libraries we looked at in class or include your own.  Try to get them on your computer and serve them locally using VS Code.  

------------------------------------------------
## Module 5 - Working with Pixels 
Topics:
- Working with the pixel array - [IDM Tutorial](https://idmnyu.github.io/p5.js-image/)
- [3D pixel array graphic](https://my.spline.design/16x4pixeldensityrgba-4fa1ebb73d2828ebca6c7446f9ac31dc/)
- Visual effects in p5 with [Blend Modes](https://p5js.org/reference/#/p5/blendMode) and [Filters](https://p5js.org/reference/#/p5/filter) 
- [Cv-examples in p5.js](https://kylemcdonald.github.io/cv-examples/) by Kyle McDonald
- Glitching with [p5.glitch](https://github.com/ffd8/p5.glitch)

[Class notes](./modules/module-5/module-5-working-with-pixels)  

Code examples:  
- [Blend Mode](./modules/module-5/code/blend-mode/index.html)
- [Filter + Blend](./modules/module-5/code/filter-and-blend/index.html)
- [Average vs. Luma](.modules/module-5/code/average-vs-luma/index.html)
- [p5.Glitch Basic](./modules/module-5/code/p5-glitch-basic/index.html)
- [p5.Glitch Almost Everything](./modules/module-5/code/p5.glitch-almost-everything/index.html)
- [OpenCV Optical Flow Drawing](./modules/module-5/code/cv-optical-flow-drawing/index.html)

📕 **Reading - due before class on Thu Nov 17th:**  
[Glitch Feminism](https://www.legacyrussell.com/GLITCHFEMINISM) by Legacy Russel.  Read the piece and write a response.  Think about what sorts of ideas resonated with you.  What inspired you?  Did you encounter any new ideas you hadn't thought of before?  

⏱ *Approx. time to complete:* 1 hour

📌 **Assignment 📌 - due Wed Nov 23rd:**  
Type out a copy of the [`p5.glitch-almost-everything`](./modules/module-5/code/p5.glitch-almost-everything/index.html) example and add GUI controls to as many parameters as you can.  Refer to the [p5.glitch](https://p5.glitch.me/) documentation to understand what the range of values for each method might be (and note any that you cannot figure out with a quick Google search).  If you get far, try swapping out the images for video or the webcam and make a landing page for, say, a subversive hacker organization 😈 (or your own org or portfolio page).

⏱ *Approx. time to complete:*  3 hours

------------------------------------------------
## Module 6 - Developing Locally
Topics:
- Node.js and npm
- The Command Line Interface
- Sending an email with Node 
- git clone, npm install

##### 📕 Reading 📕 due - Tue Nov 29th (after Thanksgiving break): 
- Sam Levine's [Intro to the Command Line](https://scrapism.lav.io/intro-to-the-command-line/) *and follow along with the code examples*
⏱ *Approx. time to complete:* 1.5 hours  

------------------------------------------------
## Module 7 - Working outside the browser
Topics:
- Cron to schedule things
- Sending iOS notifications with Pushover
- Saving a JSON small database using nedb
- Using a simple server and Twilio SMS services
- Server on the web with ngrok 


##### 📌 Assignment 📌, due Tue Dec 13th:  
- Using Node.js and Cron, create your own daily affirmations app that texts or notifies you (at least) one positive(?) affirmation per day for a week. Document your process, reactions, trouble shooting, etc.
⏱ *Approx. time to complete: 5 hours* 
 
### Addendum to our first class

p5.js simplifies many complicated Javascript operations into easier, user-friendly building blocks, much like its predecessor Processing did for the Java programming language. Each also used the same metaphor of "drawing on a screen" which appealed more immediately to artists and those who work in visual mediums.  

By simplifying many the complex and esoteric operations, p5.js provides a more intuitive framework which lowers the bar for entry into programming.  That is not to say that p5.js is only for beginners, as it is a community project with many hundreds of contributors and users around the world.

*** 

One of the goals of this class is to help you break out of the p5.js bubble and be able to adapt to the world of 'vanilla,' aka plain, Javascript.  Let's look at the code we wrote today in class which uses one of Javascript's many built-in functions, namely `setTimeout`.  

`setTimeout` first takes two arguments: a function and a delay time in milliseconds.  In the code below, we use `setTimeout` to increase the `x` value that our ellipse uses and then to call the `inc` function, which is just a short nickname for 'increment'.  You can see that we are creating a loop by calling the function `inc` as the last line of the `inc` function.  

>The `draw` loop in p5 functions in a similar manner, but recursively calls uses the `requestAnimationFrame` instead of `setTimeout`.

```js
let x = 0  // variable we will use to move our ellipse
let delay = 10  // in milliseconds

function setup() {
  createCanvas(400, 400);
  inc() // this calls our function, starting the loop
}

function draw() {
  background(220);
  ellipse(x, height * 0.5, 20)
}

function inc() {  
  x++; // increment the x value by 1 each time
  setTimeout(inc, 10) // run the inc() function again in 10 milliseconds
}
```

The code below is from the [MDN documentation for `setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) which tells us that it takes the following arguments: a function reference, integer value for the delay time in milliseconds, and any additional arguments you wish. These additional parameters are passed into the function that we supplied as our first argument. 

![After functionRef and delay, setTimeout passes the remaining parameters to the functionRef](../images/setTimeout-additional-arguments.jpg)  

>Don't let the `param1, param2, /* ...,*/ paramN` scare you. It just means that you can pass any number of parameters to `setTimeout` that you want - up to `paramN` where `N` is just a stand-in for however many you want.  

Let's try passing in additional arguments to `setTimeout` by rewriting our `inc` function below.  We'll use the variable `a` such that the ellipse will move across the screen at ever increasing amounts.  I'll also pass in a longer delay time so you can see the ellipse before it quickly goes off screen.

```js
function inc(a) {
    x += a // increase x by a
    a = x // set a equal to the increased x value
    setTimeout(inc, 200, a) // run inc again after 20 ms and pass in the additional argument a, essentially inc(a)
}
```
If you ran this code, you'll notice that you get an error. 👾 That's because we did not first declare `a` anywhere in our code.  While we could simply say, `let a = 20` before we declare our function, but there is a more streamlined way to fix the error.

```js
function inc(a = 5) { // declare a default value for a
    x += a // increase x by a
    a = x // set a equal to the increased x value
    setTimeout(inc, 200, a) // pass a back into inc
}
```

What's nice about this code is that it takes advantage of a Javascript shorthand and scope.  We give `a` a value at the time we declare the function and even if we don't pass an argument to `inc`, `a` will still have the default value of `5`. You can do this with any additional arguments as long as they are separated by a comma.

 > Note that `a` is not a global variable and has a limited scope that can only be used inside of the function `inc`.  Programmers often declare variables in this way to keep from "polluting the name space," which is a programming phrase that describes a situation where variable names could potentially clash with one another within your application or with the built-in browser functions and variables.

***

### Anonymous functions & Arrow Functions

There are a number of Javascript quirks that you will see as we venture outside of the p5 bubble.  One is that functions are written in many different ways, for various reasons.  One of the reasons for this is that the language and practices are always evolving as many millions of programmers goa about doing their daily work.  They are always seeking efficiencies.  And if you're working with many thousands of lines of code, shorthand syntax can save a lot of time and simplify things visually.

Let's take a look at the code below.  All three of these function declarations result in a function called `foo` that takes one argument `bar` and prints it to the console. (For more on why we use 'foo' and 'bar', [read this Wiki](https://en.wikipedia.org/wiki/Foobar)). Even though all three function the same, there is one difference that this syntax introduces which we will discuss below.

> Note: Instead of p5's print( ) function, I will use console.log( ).  We'll talk more about it, but console.log will also print to the p5 web editor's console.

```js
// 1. Standard function declaration 
function foo(bar) {
    console.log(bar)
}

// 2. Declare a variable using an anonymous function
var foo = function (bar) {
    console.log(bar)
}

// 2. Declare a variable using an anonymous function with arrow syntax
var foo = bar => console.log(bar)
```

Number 1. is what you're used to seeing.  When a `function` is declared this way, the function will be called up or 'hoisted' when your code is compiled. This means that it's available to use from the start of your code.  So you could call the function `foo()` on line 1 of your code even before you declare it many lines later.  

Number 2. assigns a so-called anonymous function to the variable `foo`.  A function is anonymous when it is not assigned a name after the `function` declaration.  As such, this function is not 'called-up' and you can only use it after you have declared it.  [Here is a p5 sketch](https://editor.p5js.org/rostaccoli/sketches/H-_uQaQ5L) that demonstrates this behavior.

Number 3. also uses an anonymous function but drops the word `function` altogether.  Also, you'll notice that there are no parenthesis around the argument `bar`.  Since we are only passing 1 argument, we can exclude them.

Furthermore, Number 3. employs 'arrow function' notation which is denoted with an equals sign `=` and the greater-than `>` symbol, like so `=>`.  Think of the arrow as taking the place of the word `function`.  The arrow is also illustrative of the fact that the argument is 'passed into' the function.

>You won't use arrow notation `=>` anywhere else in Javascript except when dealing with functions.  

And finally for Number 3., we don't need to encapsulate it with brackets `{ ... }` since we are only writing one line of code after the arrow. This same behavior is seen in a shorthand `if` statement, like so `if(bar == true) console.log(bar)`.

Programmers use arrow syntax and anonymous functions quite often, so it's best to get familiar with it.  However, I don't recommend that you rewrite any of the built-in p5 functions this way, as it can cause errors.  Think of p5.js as a walled garden in which there are many beautiful things, but introducing outside code can threaten the ecosystem.  

*** 

### Var, Let, Const - which do I use???

As I pointed out above, Javascript is always changing and evolving as it is the most widely used programming language in the world and is being developed by many millions of programmers.  You'll see some of the major corporate players, like Google, Facebook, or Microsoft, spearhead initiatives to codify a new syntactical practice, and they will work closely with non-profit foundations to propose and preside over new updates, with care not to break the code that came before it.  It's a very tough task with many moving parts, to say the least.  And what's more, programmers are very opinionated!

[ECMAScript 2015](https://www.w3schools.com/JS/js_es6.asp) was the name of the last major Javascript update which happened, you guessed it, in 2015.  It's generally referred to as 'ES6'.  This update introduced a number of significant changes, like arrow functions, which we discussed above, and new ways to declare variables.

The old way, you simply declared a variable with `var`.  ES6 introduced new declarations `let` and `const`.  For our purposes, the differences between `var` and `let` are less significant and you'll see a mixture of these still in use.  

`const` however is quite different.  Once you declare a variable with `const`, you cannot reassign it's value.  See the example below:

```js
const foo = 5
foo = 6  
// will throw an error

const bar = function () {
  console.log(foo)
}
bar = "new information"  
// will throw an error

const bar = []
bar[1] = 7
// this is fine since we are not re-assigning bar
// we are only manipulating the existing array

const bar = {}
bar.info = "new information"
// also fine since we are only manipulating the object
// not reassigning it
```

For more info and examples, check out this [Free Code Academy link](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/).



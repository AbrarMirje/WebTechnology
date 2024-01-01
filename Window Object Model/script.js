// The window object model in JavaScript is the way of accessing and manipulating the browser window and its contents. The window object is the global object in the web browser environment, which means that all the variables, functions, and objects defined in a web page are properties or methods of the window object. The window object also provides access to various browser features, such as the location, history, screen, document, console, and more.

// The window object has many properties and methods that can be used to interact with the browser window and the document being displayed. Some of the most common ones are:
 
// window.alert(); //Displays an alert box with a message and an OK button.
// window.confirm(); //Displays a confirm box with a message and OK and Cancel buttons.
// window.prompt(); //Displays a prompt box with a message and a text input field.
// window.open(); //Opens a new window or tab with a specified URL.
// window.close(); //Closes the current window or tab.
// window.setTimeout(); //Executes a function or an expression after a specified number of milliseconds.
// window.document; //Returns the Document object that represents the HTML document in the window.
// window.location; //Returns the Location object that contains information about the current URL.
// window.history; //Returns the History object that contains the browsing history of the window.
// window.screen; //Returns the Screen object that contains information about the display screen.
// window.innerWidth and window.innerHeight; //Return the width and height of the browser window, excluding toolbars and scrollbars.
// window.outerWidth and window.outerHeight; //Return the width and height of the browser window, including toolbars and scrollbars.
// window.pageXOffset and window.pageYOffset; //Return the number of pixels that the document has been scrolled horizontally and vertically.



// Display an alert box with a message
window.alert("Hello, this is Bing.");

// Display a confirm box and store the user's choice in a variable
var choice = window.confirm("Do you want to learn more about the window object?");

// Display a prompt box and store the user's input in a variable
var name = window.prompt("What is your name?");

// Open a new window with a specified URL
window.open("https://www.bing.com");

// Close the current window
window.close();

// Execute a function after 3 seconds
window.setTimeout(function() {
  // Display the current URL in the console
  console.log(window.location.href);
}, 3000);

// Display the width and height of the browser window in the console
console.log(window.innerWidth + " x " + window.innerHeight);

// Display the width and height of the screen in the console
console.log(window.screen.width + " x " + window.screen.height);

// Display the amount of scrolling in the console
console.log(window.pageXOffset + ", " + window.pageYOffset);

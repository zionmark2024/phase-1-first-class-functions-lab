// Function that takes a callback function as an argument and calls it
function receivesAFunction(callback) {
    // Calls the callback function
    callback();
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    // Returns a named function
    return function namedFunction() {
      return "I am a named function!";
    };
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    // Returns an anonymous function
    return function() {
      return "I am an anonymous function!";
    };
  }
  
  // Example usage:
  
  // Callback function
  const sayHello = () => console.log("Hello!");
  
  receivesAFunction(sayHello); // Calls the callback, outputs "Hello!"
  
  const namedFunc = returnsANamedFunction();
  console.log(namedFunc()); // Output: "I am a named function!"
  
  const anonymousFunc = returnsAnAnonymousFunction();
  console.log(anonymousFunc()); // Output: "I am an anonymous function!"

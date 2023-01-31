// examples of global objects are console, setTimeout, setInterval and etc.

console.log( __filename ); // This will print absolute path of this code file

console.log( __dirname ); // This will print absolute directory path

setTimeout(() => { // setTimeout function is an global function used to run callback cb after at least ms milliseconds 
    console.log("Hello World"); // this will print after one second.
}, 1000)

// These all are examples for global objects
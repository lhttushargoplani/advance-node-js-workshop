// Example of process.on('exit') event to register a callback function that will be invoked when the process is about to exit. This can be useful for performing cleanup tasks before the process exits.

process.on('exit', function(code) {
  console.log('About to exit with code:', code);
});
console.log("Program Ended");
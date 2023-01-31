let cp = require("child_process");

let child = cp.fork(__dirname + "/child.js");

child.on("message", function (m) {
  console.log("Parent process received:", m);
});

child.send({ hello: "from parent process" });

child.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});

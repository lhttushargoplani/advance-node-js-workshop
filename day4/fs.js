const fs = require("fs");

// to write into a file
fs.writeFile("temp-files/file.txt", "Hello, World!", (error) => {
  if (error) throw error;
  console.log("File written successfully.");
});

// to read from file
fs.readFile("temp-files/file.txt", "utf8", (error, data) => {
  if (error) throw error;
  console.log(data);
});

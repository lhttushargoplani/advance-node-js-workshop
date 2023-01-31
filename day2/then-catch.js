const mongoose = require("mongoose");

function handleReq() {
  mongoose
    .connect("mongodb://localhost:27017")
    .then(() => {
      console.log("DB connected successfully");
    })
    .catch((err) => {
      console.log(err);
      console.log("Failed to connect to DB");
    });
}

handleReq()
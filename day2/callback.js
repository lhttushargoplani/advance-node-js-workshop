const mongoose = require("mongoose");

function handleReq() {
  mongoose
    .connect("mongodb://localhost:27017", ((err, res) => {
        if(err) console.log("Failed to connect DB \n", err);
        else console.log("DB successfully connected");
    }))
}

handleReq()
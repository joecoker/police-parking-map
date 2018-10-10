const express = require("express");

const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send({latitude: "1.33474747"});
});

app.listen(port, function () {
  console.log("Server is running on " + port + " port");
});

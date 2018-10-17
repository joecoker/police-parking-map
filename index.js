const express = require("express");

const port = 3000;

const app = express();

const path = require('path');

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, function () {
  console.log("Server is running on " + port + " port");
});

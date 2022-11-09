const express = require("express");

const app = express();

app.get("/", function (request, response) {
  response.send("Tudo OK!");
});

app.listen(3333);

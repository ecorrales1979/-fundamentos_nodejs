const express = require("express");

const app = express();

app.get("/", function (request, response) {
  return response.send("Tudo OK!");
});

app.get("/courses", (request, response) => {
  return response.json(["Curso 1, Curso 2, Curso 3"]);
});

app.listen(3333);

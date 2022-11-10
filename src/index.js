import express from "express";

const app = express();

const courses = [
  {
    id: 1,
    name: "NodeJS",
  },
  {
    id: 2,
    name: "ReactJS",
  },
  {
    id: 3,
    name: "React Native",
  },
];

app.get("/", function (request, response) {
  return response.send("Tudo OK!");
});

app.get("/courses", (request, response) => {
  return response.json(courses);
});

app.listen(3333);

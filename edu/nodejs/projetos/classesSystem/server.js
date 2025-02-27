const express = require("express");
const Controller = require("./controller");

const server = express();
const PORT = 8080;

server.use(express.json());

server.get("/", Controller.getClasses);
server.post("/insert", Controller.insertClass);
server.put("/update/:id", Controller.updateClass);
server.delete("/delete/:id", Controller.deleteClass);

server.listen(PORT, () => console.log("Server ON"));

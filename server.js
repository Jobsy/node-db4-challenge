
const express = require("express");
const server = express();
const cors = require("cors");
const router = require("./data/recipes-router");
const router2 = require("./data/ingredients-router");


server.use(express.json());
server.use(cors());
server.use("/api/recipes", router);
server.use("/api/ingredients", router2)


server.get("/", (req, res) => {
    res.send("hello world");
})

module.exports = server;
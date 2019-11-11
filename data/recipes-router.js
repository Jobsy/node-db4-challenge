
const express = require("express");

// const dB = require("./db");

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json("It's workinggggggggggggggggg!!!")
})



module.exports = express;

const fs = require("fs");
const fastcsv = require("fast-csv");

const task = (req, res) => {
    console.log("Hello World Once Again!")
    res.send("Howdy")
}

const taskDetails = (req, res) => {
    console.log("Hello World Twice Again!")
    var data = req.body
    res.status(200).send({ data, message: "Amigo" })
}

module.exports = { task, taskDetails }
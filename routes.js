// require the Express module
const express = require("express");
const fetch = require("node-fetch")
//creates a new router object
const trailRoutes = express.Router();

trailRoutes.get("/sound", (req, res) => {
    fetch(`https://www.xeno-canto.org/api/2/recordings?query=${req.query.query}`).then(r => r.json()).then(data => res.json(data));
});

module.exports = { trailRoutes };
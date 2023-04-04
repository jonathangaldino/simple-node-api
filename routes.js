const express = require('express');
const todos = require("./todos");

const router = express.Router();

router.get("/", function(req, res) {
  res.json({ message: "Hello world!"})
});

router.get("/todos", function(req, res) {
  res.json(todos);
});

module.exports = router;

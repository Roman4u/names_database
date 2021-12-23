require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex");

const app = express();
app.use(express.json());

app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

//setup static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;

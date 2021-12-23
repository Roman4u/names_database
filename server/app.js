require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const config = require("../knexfile");
const db = require("knex")(config);

const app = express();
app.use(express.json());

app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

//setup static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/api/names", async (req, res) => {
  try {
    const allNames = await db.select().table("names");
    res.status(200).send(allNames);
  } catch (error) {
    console.error("error loading database", error);
    res.sendStatus(500);
  }
});

app.post("/api/names", async (req, res) => {
  try {
    const nameObj = req.body;
    const result = await db("names").insert(nameObj).returning("*");
    console.log(result);
    res.json(result);
  } catch (error) {
    console.error("error posting to database", error);
    res.sendStatus(500);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;

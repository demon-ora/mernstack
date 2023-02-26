const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;

app.use(express.json());

require("./db/conn.js");
app.use(require("./router/auth"));
app.get("/contact", (req, res) => {
  res.send("hello contact");
});

app.get("/about", (req, res) => {
  res.send("hello about");
});

app.get("/signin", (req, res) => {
  res.send("hello signin");
});

app.get("/signup", (req, res) => {
  res.send("hello signup");
});

app.listen(PORT);

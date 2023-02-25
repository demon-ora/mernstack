const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

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

app.listen(3000);

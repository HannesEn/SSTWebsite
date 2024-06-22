const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/aboutUs", (req, res) => {
  res.render("aboutUs");
});

app.get("/team", (req, res) => {
  res.render("team");
});
app.get("/events", (req, res) => {
  res.render("events");
});
app.get("/sstSimulator", (req, res) => {
  res.render("sstSimulator");
});
app.get("/join", (req, res) => {
  res.render("join");
});
app.listen(3001);

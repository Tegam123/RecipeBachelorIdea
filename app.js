const express = require("express");

const app = express();

//Middleware

// Routes
app.get("/", (req, res) => {
  res.send("Something");
});

app.get("/Opskrifter", (req, res) => {
  res.send("Her er nogle opskrifter...");
});

// How to listen
app.listen(3000);

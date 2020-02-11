const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postsRoutes = require("./routes/posts");

const app = express();

// To remove deprecation warnings
const connectConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

//TipZ8sZCarfxqjSd
mongoose
  .connect(
    "mongodb+srv://vasil:TipZ8sZCarfxqjSd@cluster0-ityc4.mongodb.net/node-angular?retryWrites=true&w=majority",
    connectConfig
  )
  .then(() => {
    console.log("Connected to dastabase!");
  })
  .catch(() => {
    console.log("Connected failed!");
  });

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRoutes);

module.exports = app;

require('dotenv').config();
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { router } = require("./routers");
const cors = require("cors");

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => console.log("Mongodb connected!"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS is enabled for all origins
app.use(cors());

app.use("/", router);

app.get("/", (req, res) => {
  res.send("Server healthy");
});

server.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server listen ${process.env.PORT}`);
});

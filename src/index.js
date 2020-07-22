const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;
const environment = process.env.ENVIRONMENT || "dev";

// Settings
app.set("port", PORT);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
if (environment == "production") app.use(morgan("combined"));
else app.use(morgan("dev"));

app.get("/", function (req, res) {
  res.send("Hello World! This is a simple API for sending emails");
});

app.get("/email", function (req, res) {
  res.send("Hello World!");
});

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")} 🚀`);
});

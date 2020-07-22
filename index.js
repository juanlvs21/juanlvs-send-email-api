const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const compression = require("compression");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || "dev";

// Settings
app.set("port", PORT);

// Middlewares
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
if (environment == "production") app.use(morgan("combined"));
else app.use(morgan("dev"));

// Controllers
const { contactMe } = require("./controller/email.controller");

// Routes
app.get("/", function (req, res) {
  res.status(200).json({
    status: "Ok!",
    message: "Hello World! This is a simple API for sending emails",
  });
});

app.post("/", contactMe);

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")} 🚀`);
});

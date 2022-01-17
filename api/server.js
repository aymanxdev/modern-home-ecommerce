const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

/// config and init
dotenv.config();
const app = express();

/// Mongodb connection
dbURL = process.env.MONGO_URL;

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((error) => {
    console.log("There is an error connecting to DB");
    console.log(error);
  });

/// parse jason & cors
app.use(express.json());
app.use(cors());
/// API Routes

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

// Listen to server
app
  .listen(process.env.PORT || 5000, () => {
    console.log("Backend server is runing successfully");
  })
  .on("error", function (error) {
    process.once("SIGUSR2", function () {
      process.kill(process.pid, "SIGUSR2");
    });
    process.on("SIGINT", function () {
      process.kill(process.pid, "SIGINT");
    });

    process.on("uncaughtException", function (err) {
      console.log(" UNCAUGHT EXCEPTION ");
      console.log("[Inside 'uncaught Exception']");
    });
  });

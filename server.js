require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const defaultRoute = require("./routes/default");

mongoose
  .connect(process.env.DB_ADRESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => console.log("Db Up!"),
    (err) => console.log(err)
  );

app.use(express.json());

app.use("/", authRoute);
app.use("/", defaultRoute);

app.listen(process.env.PORT, () => console.log("Server Up!"));

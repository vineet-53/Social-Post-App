if (process.env.NODE_ENV != "production") require("dotenv").config();
const mongoose = require("mongoose");
const DB = "mongodb://127.0.0.1:27017/mongoPractice";
mongoose.connect(process.env.database || DB);
const db = mongoose.connection;
db.on("error", (e) => {
  console.log(e);
});
db.once("open", () => {
  console.log("connected Local Database");
});

module.exports = db;

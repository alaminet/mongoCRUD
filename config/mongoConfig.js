const mongoose = require("mongoose");

const mongoConfig = () => {
  mongoose
    .connect(process.env.mongodbURL)
    .then(() => console.log("mongoDB Connected!"));
};

module.exports = mongoConfig;

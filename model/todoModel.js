const mongoose = require("mongoose");

const { Schema } = mongoose;

const todoSchema = new Schema({
  title: {
    type: String,
  },
  name: {
    type: String,
  },
  discription: {
    type: String,
  },
});

const todoModel = mongoose.model("todo", todoSchema);
module.exports = todoModel;

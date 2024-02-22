const express = require("express");
const todoModel = require("../../model/todoModel");
const route = express.Router();

// create a todo
route.post("/creat", async (req, res) => {
  const { title, name, discription } = req.body;
  try {
    const todo = new todoModel({
      title,
      name,
      discription,
    });
    await todo.save();
    // res.status(200).send(todo);
    res.status(200).json({ todo, message: "Todo Created Successfully" });
  } catch (error) {
    console.log(error);
  }
});

// get all todo list
route.get("/listall", async (req, res) => {
  try {
    // const todoListAll = await todoModel.find();

    // specific field ommit
    // const todoListAll = await todoModel.find().select({ _id: 0 });

    // get specific field data
    // const todoListAll = await todoModel.find().select("title name");

    // get specific field but ommit another field
    // const todoListAll = await todoModel.find().select("title name -_id");

    // get specific field and limit it
    const todoListAll = await todoModel
      .find()
      .select("title name -_id")
      .limit(3);
    res.send(todoListAll);
  } catch (error) {
    console.log(error);
  }
});

// get partial list from the todo collection
route.get("/listone/:id", async (req, res) => {
  try {
    const findTodoList = await todoModel.findById(req.params.id);
    res.send(findTodoList);
  } catch (error) {
    console.log(error);
  }
});

// find and update data
route.put("/update/:id", async (req, res) => {
  try {
    const updateSingleTodo = await todoModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    await updateSingleTodo.save();
    res.send({ message: "updated" });
  } catch (error) {
    console.log(error);
  }
});

// delete data by id
route.delete("/delete/:id", async (req, res) => {
  try {
    const deleteTodo = await todoModel.findByIdAndDelete(req.params.id);
    await deleteTodo.save();
    res.send({ message: "Data Deleted" });
  } catch (error) {
    console.log(error);
  }
});

// find and replace data
route.put("/replace/:name", async (req, res) => {
  try {
    const replaceTodo = await todoModel.findOneAndReplace(
      { name: req.params.name },
      req.body
    );
    await replaceTodo.save();
    res.send({ message: "replaced" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;

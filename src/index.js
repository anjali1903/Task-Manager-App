const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server up on " + port);
});

/* const Task = require("./models/task");
const User = require("./models/user");
const main = async () => {
  const task = await Task.findById("5dfce05353effb148fc8ad75");
  await task.populate("owner").execPopulate();
  console.log(task.owner);
  const user = await User.findById("5dfcdf4b349f2913bff13f7e");
  await user.populate("tasks").execPopulate();
  console.log(user.tasks);
};

main(); */

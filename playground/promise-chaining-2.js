require("../src/db/mongoose");
const Task = require("../src/models/task");

/* Task.findByIdAndRemove("5da60bd0ad080e344849be55").then(() => {
  return Task.countDocuments({ completed: false })
    .then(result => {
      console.log(result);
    })
    .catch(e => {
      console.log(e);
    });
});
 */
deleteTaskAndCount = async id => {
  const taskDelete = await Task.findByIdAndRemove(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("5da6edc0b00f3772fceaed68")
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });

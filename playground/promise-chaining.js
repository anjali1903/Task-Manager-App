require("../src/db/mongoose");
const User = require("../src/models/user");

//5da617264d35ba3e0cfb4578

/* User.findByIdAndUpdate("5da617264d35ba3e0cfb4578", { age: 20 })
  .then(user => {
    console.log(user);

    return User.countDocuments({ age: 19 });
  })
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log(e);
  }); */

const updateAgeAndCount = async (id, age) => {
  User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5da617264d35ba3e0cfb4578", 25)
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });

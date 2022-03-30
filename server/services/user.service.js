const User = require("../models/user.model");

const find = async (email) => {
  const user = await User.find({ email: email }).exec();
  if (!user) {
    throw new Error("E-mail or password is incorrect");
  }
  return user;
};

const add = async (newUser) => {
  const user = await User.create(newUser);
  if (!user) {
    throw new Error(`The user is not created`);
  }
  return user;
};

module.exports = { find, add };

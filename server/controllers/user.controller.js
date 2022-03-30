const userService = require("../services/user.service.js");

const findOne = async (req, res) => {
  const { email } = req.query;
  //add check
  try {
    const user = await userService.find(email);
    res.status(200).send(user);
  } catch (error) {
    res.status(204).send({ error: error.message });
  }
};

const addOne = async (req, res) => {
  const newUser = req.body;
  try {
    const user = await userService.add(newUser);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { findOne, addOne };

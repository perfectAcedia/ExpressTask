"use strict";

const userServices = require("../services/users");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const getAllUsers = (req, res) => {
  try {
    const users = userServices.getUsers();

    res.status(200).send(users);
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
};

const getUserByEmail = (req, res) => {
  try {
    const { email } = req.params;

    if (!emailRegex.test(email)) {
      res.status(400).send("Please, write correct email address");
    }

    const user = userServices.findUserByEmail(email);

    if (!user) {
      res.status(404).send("User not found");

      return;
    }

    res.status(200).send(user);
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
};

const createUser = (req, res) => {
  try {
    const newUser = userServices.addUser(req.body);

    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
};

const updateUser = (req, res) => {
  try {
    const { email } = req.body;
    const user = userServices.findUserByEmail(email);

    if (!user) {
      res.status(404).send("User not found");

      return;
    }

    const newData = req.body;
    const updatedUser = userServices.changeUserData(newData);

    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
};

const deleteUser = (req, res) => {
  try {
    const { email } = req.params;

    if (!emailRegex.test(email)) {
      res.status(400).send("Please, write correct email address");
    }

    const user = userServices.findUserByEmail(email);

    if (!user) {
      res.status(404).send("User not found");

      return;
    }

    userServices.removeUser(email);

    res.status(410).send("User has been deleted successfully")
  } catch (error) {
    res.send('Something went wrong');
  }
};

module.exports = {
  getAllUsers,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
};

"use strict";

let users = require("../../api/users.json");

const getUsers = () => {
  return users;
};

const addUser = (user) => {
  const newUser = {
    firstName: user.firstName,
    lastName: user.lastname,
    email: user.email,
    password: user.password,
    age: user.age,
    address: {
      street: user.address.street,
      city: user.address.city,
      state: user.address.state,
      zip: user.address.zip,
      country: user.address.country,
    },
    createdAt: new Date(),
    tags: user.tags,
  };
  users.push(newUser);

  return newUser;
};

const findUserByEmail = (email) => {
  return users.find((element) => element.email === email);
};

const changeUserData = (newData) => {
  const userForUpdate = findUserByEmail(newData.email);

  Object.assign(userForUpdate, newData);

  return userForUpdate;
};

const removeUser = (email) => {
  users = users.filter((user) => user.email !== email);
};

module.exports = {
  getUsers,
  addUser,
  findUserByEmail,
  changeUserData,
  removeUser,
};

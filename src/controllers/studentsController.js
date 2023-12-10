"use strict";

const studentsServices = require("../services/students");

const getStudentsStatistics = (req, res) => {
  try {
    const studentsStatistics = studentsServices.getStudentsStatistics();

    res.status(200).send(studentsStatistics);
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
};

const getWorstStudent = (req, res) => {
  try {
    const worstStudent = studentsServices.getWorstStudent();

    res.status(200).send(worstStudent)
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
};

module.exports = {
  getStudentsStatistics,
  getWorstStudent,
};

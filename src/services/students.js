"use string";

const students = require("../../api/students.json");

const getStudentsStatistics = () => {
  return students;
};

const getWorstStudent = () => {
  let worstStudent = null;
  let minHomeworkScore = Infinity

  for (const student of students) {
    const homeworkScore = student.scores.find(
      (score) => score.type === "homework"
    )?.score;

    if (homeworkScore && homeworkScore < minHomeworkScore) {
      minHomeworkScore = homeworkScore;
      worstStudent = student;
    }
  }

  return worstStudent;
};

module.exports = {
  getStudentsStatistics,
  getWorstStudent,
};

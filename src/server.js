"use strict";

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const { usersRouter } = require("./routes/users");
const { studentsRouter } = require("./routes/students");
const { articlesRouter } = require("./routes/articles");
const {
  validateRequestContent,
  requestContentForUsers,
  requestContentForArticles,
} = require("./services/validareRequest");
const { errorHandler } = require('./services/errorHandler')

function createServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.static(path.join(__dirname, "mock-data")));
  app.use(morgan("dev"));

  app.use(
    "/api/users",
    validateRequestContent(requestContentForUsers),
    usersRouter
  );
  app.use("/api/students", studentsRouter);
  app.use(
    "/api/articles",
    validateRequestContent(requestContentForArticles),
    articlesRouter
  );

  app.use(errorHandler);

  return app;
}

module.exports = {
  createServer,
};

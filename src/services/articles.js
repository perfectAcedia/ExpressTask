"use strict";

const articles = require("../../api/articles.json");

const getArticles = () => {
  return articles;
};

const findArticleByName = (name) => {
  return articles.find((article) => article.name === name);
};

const createArticle = (article) => {
  const newArticle = {
    name: article.name,
    description: article.description,
    type: article.type,
    tags: article.tags,
  };

  articles.push(newArticle);

  return newArticle;
};

const changeArticleTags = (name, tags) => {
  const article = findArticleByName(name);

  Object.assign(article, tags);

  return article;
};

module.exports = {
  getArticles,
  createArticle,
  findArticleByName,
  changeArticleTags,
};

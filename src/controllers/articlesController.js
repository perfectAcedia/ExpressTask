"use strict";

const articleServices = require("../services/articles");

const getAllArticles = (req, res) => {
  try {
    const articles = articleServices.getArticles();

    res.status(200).send(articles);
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
};

const createArticle = (req, res) => {
  try {
    const newArticle = articleServices.createArticle(req.body);

    res.status(201).send(newArticle);
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
};

const updateArticleTags = (req, res) => {
    try {
        const { name } = req.body
        const article = articleServices.findArticleByName(name);
    
        if (!article) {
          res.status(404).send("Article not found");
    
          return;
        }
    
        const tags = req.body;
        const updatedArticle = articleServices.changeArticleTags(name, tags);
    
        res.status(200).send(updatedArticle);
      } catch (error) {
        res.status(400).send("Something went wrong");
      }
};

module.exports = {
  getAllArticles,
  createArticle,
  updateArticleTags,
};

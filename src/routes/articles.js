const express = require('express');
const articlesController = require('../controllers/articlesController');

const articlesRouter = express.Router();

articlesRouter.get('/', articlesController.getAllArticles);

articlesRouter.post('/', articlesController.createArticle);

articlesRouter.patch('/', articlesController.updateArticleTags);


module.exports =  { articlesRouter };
const express = require('express');
const studentsController = require('../controllers/studentsController');

const studentsRouter = express.Router();

studentsRouter.get('/', studentsController.getStudentsStatistics);

studentsRouter.get('/worst', studentsController.getWorstStudent);


module.exports =  { studentsRouter };
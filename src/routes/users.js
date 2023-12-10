const express = require('express');
const usersController = require('../controllers/userController');

const usersRouter = express.Router();

usersRouter.get('/', usersController.getAllUsers);

usersRouter.get('/:email', usersController.getUserByEmail);

usersRouter.post('/', usersController.createUser);

usersRouter.patch('/', usersController.updateUser);

usersRouter.delete('/:email', usersController.deleteUser);


module.exports =  { usersRouter };
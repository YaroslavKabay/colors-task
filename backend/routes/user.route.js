const { Router } = require('express');

const {colorMiddleware, commonMiddleware} = require('../middlewares');
const {userController} = require('../controllers');
const {newUserValidator}= require('../validators/user.validator');

const userRoute= Router();

userRoute.post(
    '/',
    commonMiddleware.checkIfBodyIsValid(newUserValidator),
    colorMiddleware.checkIfColorPresent('query'),
    userController.createUser

);

userRoute.get(
    '/',
    userController.getAllUsers
);



module.exports = userRoute;
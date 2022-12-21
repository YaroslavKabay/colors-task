const { Router } = require('express');

const {colorMiddleware, userMiddleware} = require('../middlewares');
const {userController} = require('../controllers');
const {newUserValidator}= require('../validators/user.validator');

const userRoute= Router();

userRoute.post(
    '/',
    userMiddleware.checkIfBodyIsValid(newUserValidator),
    colorMiddleware.checkIfColorPresent('body'),
    userController.createUser

);

userRoute.get(
    '/',
    userController.getAllUsers
); // just to check information


module.exports = userRoute;
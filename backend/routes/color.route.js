const { Router } = require('express');

const {colorController} = require('../controllers');

const colorRoute= Router();


colorRoute.get(
    '/',
    colorController.getAllColors
);

colorRoute.post(
    '/',
    colorController.createColor

);
// ^^ just to check information
module.exports = colorRoute;
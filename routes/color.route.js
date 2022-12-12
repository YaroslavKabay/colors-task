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

module.exports = colorRoute;
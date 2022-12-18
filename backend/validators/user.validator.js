const Joi = require('joi');

const { ApiError } = require('../errors');
const { BAD_REQUEST } = require('../constants');

const usernameValidator = Joi.string().alphanum()
    .lowercase()
    .trim()
    .error(new ApiError('Username is not valid', BAD_REQUEST));


const newUserValidator= Joi.object({
    username: usernameValidator.required()

});

module.exports = {
    newUserValidator,

};
const { Router } = require('express');

// const {applicantsMdlwr,generalMdlwr} = require('../middlewares');
const {colorController} = require('../controllers');
// const {newApplicantValidator, updateApplicantValidator} = require('../validators/applicant.validator');

const colorRoute= Router();

colorRoute.get(
    '/',
    // generalMdlwr.checkIfBodyIsValid(newApplicantValidator),
    // applicantsMdlwr.checkIfUserEmailIsUniq,
    colorController.getAllColors
);

colorRoute.post(
    '/',
    // generalMdlwr.checkIfBodyIsValid(newApplicantValidator),
    // applicantsMdlwr.checkIfUserEmailIsUniq,
    colorController.createColor

);

module.exports = colorRoute;
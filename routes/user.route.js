const { Router } = require('express');

// const {applicantsMdlwr,generalMdlwr} = require('../middlewares');
const {userController} = require('../controllers');
// const {newApplicantValidator, updateApplicantValidator} = require('../validators/applicant.validator');

const userRoute= Router();

userRoute.get(
    '/',
    // generalMdlwr.checkIfBodyIsValid(newApplicantValidator),
    // applicantsMdlwr.checkIfUserEmailIsUniq,
    userController.getAllUsers
);

userRoute.post(
    '/',
    // generalMdlwr.checkIfBodyIsValid(newApplicantValidator),
    // applicantsMdlwr.checkIfUserEmailIsUniq,
    userController.createUser

);

module.exports = userRoute;
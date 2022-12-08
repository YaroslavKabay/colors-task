const { User } = require('../dataBase');

module.exports = {
    getAllUsers: () => User.find(),
    createUser(applicantObject) {
        return User.create(applicantObject);
    },
};
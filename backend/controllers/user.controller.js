const { statusCodes } = require('../constants');
const {userService} = require('../services');

module.exports={
    createUser: async (req, res, next) => {
        try {

            const user = await userService.createUser(req.body);

            res.status(statusCodes.CREATE).json(user);

        } catch (e) {
            next(e);
        }
    },


    getAllUsers: async (req, res, next) => {
        try {
            const users = await userService.getAllUsers();

            res.json(users);
        } catch (e) {
            next(e);
        }
    },


}
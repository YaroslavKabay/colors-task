const { statusCodes } = require('../constants');
const {userService} = require('../services');

module.exports={
    createUser: async (req, res, next) => {
        try {

            const { _id } = req.color;

            const user = await userService.createUser({ ...req.body, color: _id });

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
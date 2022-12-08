const {userService} = require('../services');

module.exports={

    getAllUsers: async (req, res, next) => {
        try {
            const users = await userService.getAllUsers();

            res.json(users);
        } catch (e) {
            next(e);
        }
    },

    createUser: async (req, res, next) => {
        try {
            const userToAdd = await userService.createUser(req.body);
            const { _id } = userToAdd;

            // res.status(statusCodes.CREATE).json(_id);
        } catch (e) {
            next(e);
        }
    },

}
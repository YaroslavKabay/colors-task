const { statusCodes } = require('../constants');
const {colorService} = require("../services");

module.exports={

    createColor: async (req, res, next) => {
        try {

            const colorToAdd = await colorService.createOne(req.body);

            res.status(statusCodes.CREATE).json(colorToAdd);

        } catch (e) {
            next(e);
        }
    },

    getAllColors:  async (req,res,next) => {
        try {
            const colors = await colorService.getAllColors();

            res.json(colors);
        } catch (e) {
            next(e);
        }
    },

}
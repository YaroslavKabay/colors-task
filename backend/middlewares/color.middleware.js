const {ApiError} = require('../errors');
const { colorService} = require("../services");
const {statusCodes} = require("../constants");

module.exports = {

    checkIfColorPresent: (from = 'params') => async function (req, res, next) {
        try {
            const { color } = req[from];

            const colorData = await colorService.getOneById(color);

            if (!colorData) {
                return next(new ApiError('Color not found', statusCodes.NOT_FOUND));
            }

            req.color = colorData;
            next();
        } catch (e) {
            next(e);
        }
    }
}
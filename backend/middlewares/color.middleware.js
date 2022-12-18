const {ApiError} = require('../errors');
const { colorService} = require("../services");
const {statusCodes} = require("../constants");

module.exports = {

    checkIfColorPresent: (from = 'params') => async function (req, res, next) {
        try {
            const { colorId } = req[from];

            const color = await colorService.getOneById(colorId);

            if (!color) {
                return next(new ApiError('Color not found', statusCodes.NOT_FOUND));
            }

            req.color = color;
            next();
        } catch (e) {
            next(e);
        }
    }
}
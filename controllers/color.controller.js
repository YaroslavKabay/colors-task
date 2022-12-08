const {colorService} = require("../services");

module.exports={

    createColor:async (req, res) => {

        const color = await colorService.createColor(req.body);

        res.status(201).json(color);
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
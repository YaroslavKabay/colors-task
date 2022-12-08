const { Color } = require('../dataBase');

module.exports = {
    getAllColors: () => Color.find(),
    createColor(colorObject) {
        return Color.create(colorObject);
    },
};
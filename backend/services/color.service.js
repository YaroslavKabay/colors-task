const { Color} = require('../dataBase');

module.exports = {
    getAllColors: () => Color.find(),

    createOne(colorObject) {
        return Color.create(colorObject);
    },

    getOneById(id){
        return Color.findById(id);
    },

};
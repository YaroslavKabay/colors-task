const { Schema, model } = require('mongoose');

const colorSchema = new Schema({
    color: { type: String, trim: true, required: true, unique: true },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('color', colorSchema);
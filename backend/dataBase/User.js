const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: { type: String, trim: true, required: true, unique: true },
    color: {
        type: Schema.Types.ObjectId,
        ref: 'color'
    }

}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('user', userSchema);
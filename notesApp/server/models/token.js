const mongoose = require("mongoose");
const { Schema } = mongoose;

const tokenSchema = new Schema({
    userId: {
        type: Schema.ObjectId,
        required: true,
        ref: "user",
        unique: true,
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 3600,
    }
});

module.exports = mongoose.model('token', tokenSchema);
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        fname: {
            type: String,
            required: true,
        },
        lname: {
            type: String,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        image: {
            type: String,
            default: '',
        },
        verified: {
            type: Boolean,
            required: true,
            default: false,
        },
        password: {
            type: String,
            required: true,
        }
    }, {
    timestamps: true,
}
);

module.exports = mongoose.model('User', userSchema);
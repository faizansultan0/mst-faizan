const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        createdBy: {
            type: Schema.ObjectId,
            ref: 'user',
            required: true,
        }
    }, {
        timestamps: true
    }
)

module.exports = mongoose.model('note', noteSchema);
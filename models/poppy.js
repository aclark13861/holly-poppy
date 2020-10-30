const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personSchema = new Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Company: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    State: {
        type: String,
        required: true
    },
    Zip: {
        type: Number,
        required: true
    },
    Phone: Number,
    Website: String,
}, {
    timestamps: true
});


module.exports = mongoose.model('Poppy', personSchema);
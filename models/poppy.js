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
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}

}, {
    timestamps: true
});

personSchema.pre('save', function(next) {
    now = new Date();
    this.updated_at = now;
    if(!this.created_at) {
        this.created_at = now
    }
    next();
});

module.exports = mongoose.model('Poppy', personSchema);
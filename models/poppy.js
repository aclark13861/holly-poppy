const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personSchema = new Schema({
    firstName: String,
    lastName: String,
    company: String,
    address: String,

});

module.exports = mongoose.model('Poppy', personSchema);
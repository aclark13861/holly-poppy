const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hollyDB', 
{useNewUrlParser: true, useCreateIndex: true});

const db = mongoose.connection;

db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});








const todos = [
    {todo: 'Feed Dogs', done: true},
    {todo: 'Learn Express', done: false},
    {todo: 'Buy Milk', done: false}
  ];
  
  module.exports = {
    getAll: function() {
      return todos;
    }
  };
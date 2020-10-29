const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aclark13861:Jeremy_1@business-cluster.apkap.mongodb.net/HollyPoppyDB?retryWrites=true&w=majority', 
{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const db = mongoose.connection;


db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});


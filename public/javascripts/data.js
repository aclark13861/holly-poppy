var mongoose = require ('mongoose');

mongoose.connect('mongodb+srv://aclark13861:Jeremy_1@business-cluster.apkap.mongodb.net/HollyPoppyDB?retryWrites=true&w=majority', 
{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const db = mongoose.connection;

var data = new Array();
    db.collection('poppies').find({},function(err, poppies) {
        for (var i = 0; i < poppies.length; i++) {
            data[i] = poppies[i].Address;
            console.log(data)
    }
 });


module.exports = data;
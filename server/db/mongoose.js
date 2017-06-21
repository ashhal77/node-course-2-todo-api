


var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds135252.mlab.com:35252/nodejs');


module.exports = {mongoose: mongoose};
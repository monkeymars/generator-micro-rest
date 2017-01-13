const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;
mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://localhost:27017/db-development');

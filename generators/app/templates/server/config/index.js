const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
var config = require('./' + env);
module.exports = config;

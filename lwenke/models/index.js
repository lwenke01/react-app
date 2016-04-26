'use strict';
var mongoose = require('mongoose');
var DB_PORT = process.env.MONGOLAB_URI || 'mongodb://localhost/db';
mongoose.connect(DB_PORT);
const models = {};

require('./arcade')(mongoose, models);
// require('./Game')(mongoose, models);

module.exports = models;

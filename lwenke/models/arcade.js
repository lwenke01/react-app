'use strict';

const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ArcadeSchema = new Schema({
  name: String,
  location: String,
  hours: String,
  updated: {type: Date, default: Date.now }
});
var Arcade = mongoose.model('Arcade', ArcadeSchema);
module.exports = Arcade;

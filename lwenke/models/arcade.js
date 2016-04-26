'use strict';


module.exports = (mongoose, models) => {
  let Schema = mongoose.Schema;
  let ArcadeSchema = new Schema({
    name: String,
    location: String,
    hours: String,
    updated: {type: Date, default: Date.now }


  });
  var Arcade = mongoose.model('Arcade', ArcadeSchema);
  models.Arcade = Arcade;
};

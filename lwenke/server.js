'use strict';
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const Arcade = require(__dirname + '/models/arcade.js');
const PORT = process.env.PORT || 3000;
const router = express.Router();

app.use(bodyParser.json());

app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});
app.route('/arcades')
  .get((req, res) =>{
    console.log('get was hit');
    Arcade.find({}, (err, arcades)=>{
      if(err)  return res.send(err);
      res.json({arcades});
      res.end();
    });
  })
   .post((req, res)=>{
     console.log('post was hit');
     var newArcade = new Arcade(req.body);
     newArcade.save((err, arcade)=>{
       if (err) return res.send(err);
       res.json(arcade);
       res.end();
     });

   });
  app.route('/arcades/:id')
   .put((req, res)=>{
     console.log('PUT /arcade/:id was hit');
     Arcade.findByIdAndUpdate(req.params.id, req.body,(err, arcade)=>{
       if (err) res.send(err);
       res.json(arcade);
     });
   })
    .delete((req, res)=> {
      console.log('Delete /arcade/:id was hit');
      Arcade.remove({_id: req.params.id}, (err, arcade)=> {
        if(err) return res.send(err);
        res.json({
          data: arcade,
          msg: 'sucessfully deleted arcade'});
      });
    });



app.use('/', express.static(path.join(__dirname, 'app')));


mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/db')
app.listen(PORT, ()=>{
  console.log('Magic is happening on port ' + PORT);

});

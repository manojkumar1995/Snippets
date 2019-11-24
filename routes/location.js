const express = require('express');
const mongoose = require('mongoose');
const fetch = require("node-fetch");
const bodyParser = require('body-parser')
const router = express.Router();

//Load User Model
require('../models/Location');

const Location = mongoose.model('locations');


router.post('/', (req, res) => {
  // console.log(req.body.ip);
  var city= req.body.city;
  var latitude = req.body.latitude;
  var longitude = req.body.longitude;
  var ip = req.body.ip;
  var postal = req.body.postal;
  var state = req.body.state;

  const newLocation = new Location({
    city: city,
    latitude: latitude,
    longitude: longitude,
    postal:postal,
    ip: ip,
    state:state
  });

  newLocation
    .save()
    .then(location => {
      res.send('done');
    })
    .catch(err => {
      console.log(err);
      return;
    });
   
});
      
module.exports = router;
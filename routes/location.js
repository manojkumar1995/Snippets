const express = require('express');
const mongoose = require('mongoose');
const fetch = require("node-fetch");
const router = express.Router();

//Load User Model
require('../models/Location');

const Location = mongoose.model('locations');


router.post('/', (req, res) => {
  fetch('https://geoip-db.com/json/')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      
      var postal = data.postal;
      var state = data.state;
      var city = data.city;
      var latitude = data.latitude;
      var longitude = data.longitude;
      var ip = data.IPv4;

      console.log(city, latitude, longitude, ip, state, postal);

      const newLocation = new Location({
        city: city,
        latitude: latitude,
        longitude: longitude,
        ip: ip,
        state:state,
        postal:postal
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

    })
    .catch(err => console.log(err));

  
});
      
module.exports = router;
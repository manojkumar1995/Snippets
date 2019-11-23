const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const LocationSchema = new Schema({
  postal: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  latitude: {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  },
  ip: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('locations', LocationSchema);
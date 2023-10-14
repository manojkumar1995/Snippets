const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const fetch = require("node-fetch");
const bodyParser = require('body-parser');
const { ensureAuthenticated} =require('../helpers/auth');

// Load Location models
require('../models/Location');
const Location = mongoose.model('locations');

//Index Route
router.get('/', (req, res) => {
  const title = 'Welcome to Snippets';
  res.render('index', {
    title: title
  });
});

//Material Index Route
router.get('/material', (req, res) => {
  res.render('material_index', { layout: 'main.material.handlebars' });
});

//About Route
router.get('/about', (req, res) => {
  const title = 'About My CodeSnippets';
  res.render('about', {
    title: title
  });
});

//Content Route
router.get("/bootstrap_content", (req, res) => {
  res.render("bootstrap_content");
});

//Content Route
router.get("/display", (req, res) => {
  res.render("display");
});

//List Route
router.get("/list",ensureAuthenticated,(req, res)=>{
  Location.find({})
  .lean()
  .sort({date:'desc'})
  .then(locations=>{
    res.render("lists",{
      locations:locations
    });
  })
})

//New Route
router.get('/new', (req, res) => {
  const title = 'Coming Soon';
  res.render('new', {
    title: title
  });
});




module.exports = router;    
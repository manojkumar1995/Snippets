const express =require('express');
const mongoose = require('mongoose');
const router = express.Router();

//User Login Route
router.get('/login',  (req,res) => {
  res.render('users/login');
});


//User Register Route
router.get('/registration', (req, res) => {
  res.render('users/login');
});

module.exports =router;

const express = require('express');
const router = express.Router();


//Content Route
router.get('/content', (req, res) => {
  res.render('content');
});

//Containers Route
router.get('/containers', (req, res) => {
  res.render('containers');
});

//Buttons Routes
router.get('/buttons', (req, res) => {
  res.render('buttons');
});


module.exports = router;  
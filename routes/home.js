const express = require('express');
const router = express.Router();

//Index Route
router.get('/', (req, res) => {
  const title = 'Welcome to Code Snippets';
  res.render('index', {
    title: title
  });
});

//About Route
router.get('/about', (req, res) => {
  const title = 'About Snippets';
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



module.exports = router;    
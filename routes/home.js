const express = require('express');
const router = express.Router();

//Index Route
router.get('/', (req, res) => {
  const title = 'Welcome to CodeSnippets';
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
router.get("/content", (req, res) => {
  res.render("content");
});



module.exports = router;    
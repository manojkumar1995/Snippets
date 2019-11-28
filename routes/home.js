const express = require('express');
const router = express.Router();

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
  const title = 'About CodeSnippets';
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

//New Route
router.get('/new', (req, res) => {
  const title = 'Coming Soon';
  res.render('new', {
    title: title
  });
});




module.exports = router;    
const express = require("express");
const router = express.Router();

//Content Route
router.get("/content", (req, res) => {
  res.render("content");
});

//Colors Route
router.get("/colors",(req,res) =>{
  res.render('colors');
});

//Containers Route
router.get("/containers", (req, res) => {
  res.render("containers");
});

//Buttons Routes
router.get("/buttons", (req, res) => {
  res.render("buttons");
});

//Typography Routes
router.get("/typography", (req, res) => {
  res.render("typography");
});

module.exports = router;

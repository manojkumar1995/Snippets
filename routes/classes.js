const express = require("express");
const router = express.Router();

//Alert Route:
router.get("/alerts", (req, res) => {
  res.render("alerts");
});

//Badges Route:
router.get("/badges", (req, res) => {
  res.render("badges");
});

//Content Route
router.get("/content", (req, res) => {
  res.render("content");
});

//Colors Route
router.get("/colors", (req, res) => {
  res.render("colors");
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

//Images Routes:
router.get("/images", (req, res) => {
  res.render("images");
});

//Modal Routes:
router.get("/modal", (req, res) => {
  res.render("modal");
});

module.exports = router;

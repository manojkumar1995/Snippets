const express = require("express");
const router = express.Router();

//Alert Route:
router.get("/alerts", (req, res) => {
    res.render("Bootstrap/classes/alerts");
});


//Badges Route:
router.get("/badges", (req, res) => {
    res.render("Bootstrap/classes/badges");
});

//Content Route
router.get("/content", (req, res) => {
    res.render("Bootstrap/classes/content");
});

//Colors Route
router.get("/colors", (req, res) => {
    res.render("Bootstrap/classes/colors");
});

//Containers Route
router.get("/containers", (req, res) => {
    res.render("Bootstrap/classes/containers");
});

//Buttons Routes
router.get("/buttons", (req, res) => {
    res.render("Bootstrap/classes/buttons");
});

//Typography Routes
router.get("/typography", (req, res) => {
    res.render("Bootstrap/classes/typography");
});

//Images Routes:
router.get("/images", (req, res) => {
    res.render("Bootstrap/classes/images");
});

//Modal Routes:
router.get("/modal", (req, res) => {
    res.render("Bootstrap/classes/modal");
});


module.exports = router;

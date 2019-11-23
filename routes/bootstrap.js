const express = require("express");
const router = express.Router();
const { ensureAuthenticated} =require('../helpers/auth');

//Alert Route:
router.get("/alerts", (req, res) => {
    res.render("Bootstrap/classes/alerts");
});

//Badges Route:
router.get("/badges", (req, res) => {
    res.render("Bootstrap/classes/badges");
});

//Buttons Routes
router.get("/buttons", (req, res) => {
    res.render("Bootstrap/classes/buttons");
});

// Cards Route:
router.get("/cards", (req, res) => {
    res.render("Bootstrap/classes/cards");
});

//Carousel Route
router.get("/carousel", ensureAuthenticated, (req, res) => {
    res.render("Bootstrap/classes/carousels");
});

//CDN Route
router.get("/cdn", (req, res) => {
    res.render("Bootstrap/classes/CDN");
});


//Collapse Route
router.get("/collapse", ensureAuthenticated, (req, res) => {
    res.render("Bootstrap/classes/collapse");
});

//Colors Route
router.get("/colors", ensureAuthenticated, (req, res) => {
    res.render("Bootstrap/classes/colors");
});

//Containers Route
router.get("/containers", ensureAuthenticated, (req, res) => {
    res.render("Bootstrap/classes/containers");
});


//Dropdown Route
router.get("/dropdowns", ensureAuthenticated, (req, res) => {
    res.render("Bootstrap/classes/dropdowns");
});

//Filters Route
router.get("/filters", ensureAuthenticated, (req, res) => {
    res.render("Bootstrap/classes/filters");
});

//Flex Route
router.get("/flex", ensureAuthenticated, (req, res) => {
    res.render("Bootstrap/classes/flex");
});

//Forms Route
router.get("/forms", ensureAuthenticated, (req, res) => {
    res.render("Bootstrap/classes/forms");
});

//Grids Route
router.get("/grids", ensureAuthenticated, (req, res) => {
    res.render("Bootstrap/classes/grids");
});

//Images Routes:
router.get("/images", ensureAuthenticated, (req, res) => {
    res.render("Bootstrap/classes/images");
});

//Inputs Routes:
router.get("/inputs", ensureAuthenticated, (req, res) => {
    res.render("Bootstrap/classes/inputs");
});

//List-Group Routes:
router.get("/listgroups", ensureAuthenticated, (req, res) => {
    res.render("Bootstrap/classes/listgroups");
});

//Media Objects Routes:
router.get("/media_objects", ensureAuthenticated, (req, res) => {
    res.render("Bootstrap/classes/media_objects");
});

//Modal Routes:
router.get("/modal", ensureAuthenticated, (req, res) => {
    res.render("Bootstrap/classes/modal");
});

//Nav & Navbar Routes:
router.get("/navbars", ensureAuthenticated, (req, res) => {
    res.render("Bootstrap/classes/navbars");
});

//Pagination Routes:
router.get("/paginations", ensureAuthenticated, (req, res) => {
    res.render("Bootstrap/classes/paginations");
});

//Popup Routes:
router.get("/popover", ensureAuthenticated, (req, res) => {
    res.render("Bootstrap/classes/popover");
});

//ProgressBars Routes:
router.get("/progressbars", ensureAuthenticated, (req, res) => {
    res.render("Bootstrap/classes/progressbars");
});

//Scroll Spy Routes:
router.get("/scrollspy", ensureAuthenticated, (req, res) => {
    res.render("Bootstrap/classes/scrollspy");
});

//Spinner Routes:
router.get("/spinners", ensureAuthenticated, (req, res) => {
    res.render("Bootstrap/classes/spinners");
});

//Tables Routes:
router.get("/tables", ensureAuthenticated, (req, res) => {
    res.render("Bootstrap/classes/tables");
});

//Toast Routes:
router.get("/toast", ensureAuthenticated, (req, res) => {
    res.render("Bootstrap/classes/toast");
});

//tooltip Routes:
router.get("/tooltip", ensureAuthenticated, (req, res) => {
    res.render("Bootstrap/classes/tooltip");
});

//Typography Routes
router.get("/typography", ensureAuthenticated, (req, res) => {
    res.render("Bootstrap/classes/typography");
});


//utilities Routes:
router.get("/utilities", ensureAuthenticated, (req, res) => {
    res.render("Bootstrap/classes/utilities");
});







module.exports = router;

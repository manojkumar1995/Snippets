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

//Buttons Routes
router.get("/buttons", (req, res) => {
    res.render("Bootstrap/classes/buttons");
});

// Cards Route:
router.get("/cards", (req, res) => {
    res.render("Bootstrap/classes/cards");
});

//Carousel Route
router.get("/carousel", (req, res) => {
    res.render("Bootstrap/classes/carousels");
});

//CDN Route
router.get("/cdn", (req, res) => {
    res.render("Bootstrap/classes/CDN");
});


//Collapse Route
router.get("/collapse", (req, res) => {
    res.render("Bootstrap/classes/collapse");
});

//Colors Route
router.get("/colors", (req, res) => {
    res.render("Bootstrap/classes/colors");
});

//Containers Route
router.get("/containers", (req, res) => {
    res.render("Bootstrap/classes/containers");
});


//Dropdown Route
router.get("/dropdowns", (req, res) => {
    res.render("Bootstrap/classes/dropdowns");
});

//Filters Route
router.get("/filters", (req, res) => {
    res.render("Bootstrap/classes/filters");
});

//Flex Route
router.get("/flex", (req, res) => {
    res.render("Bootstrap/classes/flex");
});

//Forms Route
router.get("/forms", (req, res) => {
    res.render("Bootstrap/classes/forms");
});

//Grids Route
router.get("/grids", (req, res) => {
    res.render("Bootstrap/classes/grids");
});

//Images Routes:
router.get("/images", (req, res) => {
    res.render("Bootstrap/classes/images");
});

//Inputs Routes:
router.get("/inputs", (req, res) => {
    res.render("Bootstrap/classes/inputs");
});

//List-Group Routes:
router.get("/listgroups", (req, res) => {
    res.render("Bootstrap/classes/listgroups");
});

//Media Objects Routes:
router.get("/media_objects", (req, res) => {
    res.render("Bootstrap/classes/media_objects");
});

//Modal Routes:
router.get("/modal", (req, res) => {
    res.render("Bootstrap/classes/modal");
});

//Nav & Navbar Routes:
router.get("/navbars", (req, res) => {
    res.render("Bootstrap/classes/navbars");
});

//Pagination Routes:
router.get("/paginations", (req, res) => {
    res.render("Bootstrap/classes/paginations");
});

//Popup Routes:
router.get("/popover", (req, res) => {
    res.render("Bootstrap/classes/popover");
});

//ProgressBars Routes:
router.get("/progressbars", (req, res) => {
    res.render("Bootstrap/classes/progressbars");
});

//Scroll Spy Routes:
router.get("/scrollspy", (req, res) => {
    res.render("Bootstrap/classes/scrollspy");
});

//Spinner Routes:
router.get("/spinners", (req, res) => {
    res.render("Bootstrap/classes/spinners");
});

//Tables Routes:
router.get("/tables", (req, res) => {
    res.render("Bootstrap/classes/tables");
});

//Toast Routes:
router.get("/toast", (req, res) => {
    res.render("Bootstrap/classes/toast");
});

//tooltip Routes:
router.get("/tooltip", (req, res) => {
    res.render("Bootstrap/classes/tooltip");
});

//Typography Routes
router.get("/typography", (req, res) => {
    res.render("Bootstrap/classes/typography");
});


//utilities Routes:
router.get("/utilities", (req, res) => {
    res.render("Bootstrap/classes/utilities");
});







module.exports = router;

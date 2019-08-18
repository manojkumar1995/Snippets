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

// Cards Route:
router.get("/cards",(req,res) =>{
    res.render("Bootstrap/classes/cards");
});


//Colors Route
router.get("/colors", (req, res) => {
    res.render("Bootstrap/classes/colors");
});

//Collapse Route
router.get("/collapse", (req, res) => {
    res.render("Bootstrap/classes/collapse");
});


//Containers Route
router.get("/containers", (req, res) => {
    res.render("Bootstrap/classes/containers");
});

//Carousel Route
router.get("/carousel", (req, res) => {
    res.render("Bootstrap/classes/carousels");
});


//Dropdown Route
router.get("/dropdowns", (req, res) => {
    res.render("Bootstrap/classes/dropdowns");
});

//Filters Route
router.get("/filters",(req,res)=>{
    res.render("Bootstrap/classes/filters");
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

//Pagination Routes:
router.get("/paginations", (req, res) => {
    res.render("Bootstrap/classes/paginations");
});

//List-Group Routes:
router.get("/listgroups", (req, res) => {
    res.render("Bootstrap/classes/listgroups");
});

//Modal Routes:
router.get("/modal", (req, res) => {
    res.render("Bootstrap/classes/modal");
});

//Media Objects Routes:
router.get("/media_objects", (req, res) => {
    res.render("Bootstrap/classes/media_objects");
});

//Spinner Routes:
router.get("/spinners", (req, res) => {
    res.render("Bootstrap/classes/spinners");
});

//Scroll Spy Routes:
router.get("/scrollspy", (req, res) => {
    res.render("Bootstrap/classes/scrollspy");
});

//Popup Routes:
router.get("/popover",(req,res)=>{
    res.render("Bootstrap/classes/popover");
});

//ProgressBars Routes:
router.get("/progressbars",(req,res)=>{
    res.render("Bootstrap/classes/progressbars");
});

//Tables Routes:
router.get("/tables", (req, res) => {
    res.render("Bootstrap/classes/tables");
});

//Toast Routes:
router.get("/toast",(req,res) =>{
    res.render("Bootstrap/classes/toast");
});

//tooltip Routes:
router.get("/tooltip", (req, res) => {
    res.render("Bootstrap/classes/tooltip");
});




module.exports = router;

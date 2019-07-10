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

//Toast Routes:
router.get("/toast",(req,res) =>{
    res.render("Bootstrap/classes/toast");
})

//Spinner Routes:
router.get("/spinners", (req, res) => {
    res.render("Bootstrap/classes/spinners");
});

module.exports = router;

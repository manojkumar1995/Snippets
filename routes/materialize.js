const express = require("express");
const router = express.Router();

// http://localhost:5000/materialize/classes/colors
router.get("/colors", (req, res) => {
    res.render("Materialize/classes/CSS/colors", { layout: 'main.material.handlebars' });
});





module.exports = router;

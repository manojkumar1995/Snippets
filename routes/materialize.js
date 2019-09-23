const express = require("express");
const router = express.Router();

router.get("/colors", (req, res) => {
    res.render("Materialize/classes/CSS/colors", { layout: 'main.material.handlebars' });
});



module.exports = router;

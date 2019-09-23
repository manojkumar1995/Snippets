const express = require("express");
const router = express.Router();

//Alert Route:
router.get("/alerts", (req, res) => {
    res.render("Materialize/classes/alerts", { layout: 'main.material.handlebars' });
});


module.exports = router;

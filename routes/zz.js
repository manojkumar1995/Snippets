const express = require("express");
const router = express.Router();

router.get("/zzz", (req, res) => {
  res.render("ZZ/home");
});

module.exports = router;
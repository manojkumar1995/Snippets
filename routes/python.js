const express = require("express");
const router = express.Router();


// ------------------------------Pythons-Language Routes Begin -------------------------//

router.get("/basics", (req, res) => {
  res.render("Python/language/basics");
});

// ------------------------------Pythons-Language Routes End -------------------------//

// ------------------------------Pythons-Django Routes -------------------------//
router.get("/Django/venv", (req, res) => {
  res.render("Python/django/venv");
});




module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/display", (req, res) => {
  res.render("Python/python_display");
});


// ------------------------------Pythons-Language Routes Begin -------------------------//

router.get("/basics", (req, res) => {
  res.render("Python/language/basics");
});

// ------------------------------Pythons-Language Routes End -------------------------//

// ************************************************************************************

// ------------------------------Pythons-Django Routes Begin ------------------------//

router.get("/Django/venv", (req, res) => {
  res.render("Python/django/venv");
});

// ------------------------------Pythons-Django Routes End -------------------------//





module.exports = router;

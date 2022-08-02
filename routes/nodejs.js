const express = require("express");
const router = express.Router();


router.get("/",(req,res)=>{
    res.render("NodeJs/nodejs-content",{ layout: 'main.nodejs.handlebars' });
})

router.get("/installation",(req,res)=>{
    res.render("NodeJS/installation");
})

module.exports = router;
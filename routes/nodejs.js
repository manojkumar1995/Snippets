const express = require("express");
const router = express.Router();



router.get("/content",(req,res)=>{
    res.render("NodeJs/nodejs-content",{ layout: 'main.nodejs.handlebars' });
})

router.get("/installation",(req,res)=>{
    res.render("NodeJs/installation", { layout: 'main.nodejs.handlebars' });
})

router.get("/unit-testing-node-intro",(req,res)=>{
    res.render("NodeJs/unit-testing-intro", { layout: 'main.nodejs.handlebars' });
})

router.get("/unit-testing-mocha",(req,res)=>{
    res.render("NodeJs/unit-testing-mocha", { layout: 'main.nodejs.handlebars' });
})

module.exports = router;
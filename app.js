const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const flash = require('connect-flash');
const session =require('express-session');
const bodyParser =require('body-parser');
const mongoose = require('mongoose');


const app = express();

//Map global Promises  
mongoose.Promise= global.Promise;

//Connect to Mongodb
mongoose
  .connect(
    'mongodb+srv://manoj:manoj123@mongonode-hdsog.gcp.mongodb.net/Snippets?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => console.log('Mongodb connected ..'))
  .catch(err => console.log(err));

//Load Routes
const home = require("./routes/home");
const bootstrap = require("./routes/bootstrap");
const materialize = require("./routes/materialize");
const python = require("./routes/python");

const users = require("./routes/users");

//Handlebars MiddleWare
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);

//Body Parser middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Express-Session Middleware
app.use(session({
  secret:'secret',
  resave:false,
  saveUninitialized:true
}));

app.use(flash());

//Global Variables:
app.use(function(req,res,next){
  res.locals.sucess_msg=req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

app.set("view engine", "handlebars");

//Static folder
app.use(express.static(path.join(__dirname, "public")));

//Use Routes
app.use("/", home);
app.use("/bootstrap/classes", bootstrap)
app.use("/materialize/classes", materialize)
app.use("/python/language", python)
app.use("/users/", users)

//Page Not Found Route
app.get('*', function (req, res) {
  res.render("404-page");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});

const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const mongoose = require('mongoose');

const app = express();

//Map global Promises  
mongoose.Promise= global.Promise;

//Connect to Mongodb
mongoose.connect('mongodb://localhost/Snippets',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=> console.log('Mongodb connected ..'))
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

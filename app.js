const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();


//Load Routes
const home = require("./routes/home");
const bootstrap = require("./routes/bootstrap");

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

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});

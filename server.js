/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const baseController = require("./controllers/baseController")
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const env = require("dotenv").config();
const app = express();
const static = require("./routes/static");


app.use(static);

/* ***********************
 *View Engine and Templates
 *************************/
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/layout"); // not at views root

/* ***********************
 * Routes
 *View Engine and Templates
 *************************/
app.use(static);
//Index route
//app.get("/", function(req, res){res.render("index", {title: "home"})});
app.get("/", baseController.buildHome)

//An Explanation
//Previously the index.ejs view was rendered directly
//in the route.While it worked, it did not follow the M - V - C methodology.
//The new code uses the imported "baseController" to "call" the "buildHome" method.
//This will execute the function in the controller,
//build the navigation bar and pass it and the title
//name - value pair to the index.ejs view, which will
//then be sent to the client.


/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 ************************
const port = process.env.PORT
const host = process.env.HOST

/* ***********************
 * Log statement to confirm server operation
 ************************
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
});*/

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

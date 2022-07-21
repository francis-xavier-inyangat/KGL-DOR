const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
require('dontev').config();

//sessions
const expressSession = require("express-session")({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  });


  
  
const config = require("./config/database");


  // models

//instatiating the express server
const app = express();

//database setup
//setting connection
mongoose.connect(config.database, { useNewUrlParser: true });
const db = mongoose.connection;

//checking connection
db.once("open", function () {
  console.log("Connected to MongoDB");
});

// Check for db errors
db.on("error", function (err) {
  console.error(err);
});

//middlewares
// Express Middleware
// Setting view Engine.
server.set("view engine", "pug");
server.set("views", "./views");
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "public")));
server.use(expressSession);

//configuring passport
server.use(passport.initialize());
server.use(passport.session());

// Passport Local Strategy
passport.use(Managerlogin.createStrategy());
passport.serializeUser(Managerlogin.serializeUser());
passport.deserializeUser(Managerlogin.deserializeUser());

const loginchecker = (req, res, next) => {
  if (req.path != "/login" && req.path != "/register" && !req.session.user) {
    res.redirect("/login");
  }
  next();
};
server.use(loginchecker);

// handling non existing routes
server.get("*", (req, res) => {
    res.status(404).send("OOPS! WRONG ADDRESS");
  });
  
  // server
  server.listen(3000, () => console.log("Listening on Port 3000"));
  

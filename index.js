"use strict";
require("dotenv").config();

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const process = require("process");

var app = express();
const Knex = require("knex");
app.enable("trust proxy");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, "/client/build")));

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const animalsRouter = require("./routes/animals");

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/animals", animalsRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

// [START cloud_sql_postgres_knex_create]
// Initialize Knex, a Node.js SQL query builder library with built-in connection pooling.
const connect = () => {
  // Configure which instance and what database user to connect with.
  // Remember - storing secrets in plaintext is potentially unsafe. Consider using
  // something like https://cloud.google.com/kms/ to help keep secrets secret.
  const config = {
    user: process.env.DB_USER, // e.g. 'my-user'
    password: process.env.DB_PASS, // e.g. 'my-user-password'
    database: process.env.DB_NAME, // e.g. 'my-database'
  };

  config.host = `/cloudsql/${process.env.CLOUD_SQL_CONNECTION_NAME}`;

  // Establish a connection to the database
  const knex = Knex({
    client: "pg",
    connection: config,
  });

  return knex;
};

const knex = connect();
// [END cloud_sql_postgres_knex_create]

// Heroku post-build script
// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(process.env.PORT || 8080, () =>
  console.log("App listening on port 8080")
);

module.exports = app;

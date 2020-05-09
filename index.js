require("dotenv").config();

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const process = require("process");
var cors = require("cors");

var app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const animalsRouter = require("./routes/animals");

app.use("/animals", animalsRouter);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Serving build's index.html file for Deploying to Google App Engine is MUST for production

  // From - https://facebook.github.io/create-react-app/docs/deployment
  // Set static folder
  app.use(express.static(path.join(__dirname, "client", "build")));

  // Only now, AFTER the above /api/ routes, the "catchall" handler routes: for any request that doesn't match any route after "/" below and send back React's index.html file.
  // Note, this 'catchall" route MUST be put after the above  /api/ routes. Otherwise those api routes will never be hit
  // Catch-all GET route
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
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

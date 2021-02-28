/*This page is used to set view engines, use third party packages and express methods
  Author: Aritra Roy
     Student ID: 301176508*/ 
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let contactRouter = require('../routes/contact');
let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
let passportJWT = require('passport-jwt');
let JWTStrategy = passportJWT.Strategy;
let ExtractJWT = passportJWT.ExtractJwt;
let app = express();

// database
let mongoose = require('mongoose');
let db = require('./db');

//point mongoose to db URI
mongoose.connect(db.URI);
let mongodb = mongoose.connection;
mongodb.on('error', console.error.bind(console, 'connection error'));
mongodb.once('open', ()=>{
  console.log("Connected to MongoDB..");
});
//authentication
let session = require('express-session');
let passport = require('passport');
let passportlocal = require('passport-local');
let localstrategy = passportlocal.Strategy;
let flash = require('connect-flash');
//setup express session
app.use(session({
  secret: "SomeSecret",
  saveUninitialized: false,
  resave: false
}))
//user model instance
let userModel= require('../models/user');
let User = userModel.User;
//serialise and deserialise
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser()); 
//initialize flash
app.use(flash());
//initialize passport
app.use(passport.initialize());
app.use(passport.session());

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = db.Secret;

let strategy = new JWTStrategy(jwtOptions, (jwt_payload, done) => {
  User.findById(jwt_payload.id)
    .then(user => {
      return done(null, user);
    })
    .catch(err => {
      return done(err, false);
    });
});
passport.use(strategy);
// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use(express.static(path.join(__dirname, '../node_modules')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contact', contactRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

/* This page adds routing for all pages in website
Author: Aritra Roy
     Student ID: 301176508
*/
let express = require('express');
let router = express.Router();
/*database*/
let mongoose = require('mongoose');
let passport= require('passport');
/*create user model instance*/
let userModel = require('users');
let User = userModel.User;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'E-portfolio' });
});
/* Get about page*/
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About'});
});
/* Get projects page*/
router.get('/projects', function (req, res, next) {
  res.render('projects', { title: 'Projects'});
});
/* Get services page*/
router.get('/services', function (req, res, next) {
  res.render('services', { title: 'Services'});
});
/* Get contact page*/
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact'});
});
/* Get registered page*/
router.post('/contact', indexcontroller.processAddpage() , function (req, res, next) {
  res.render('contact', { title: 'Contact'});
});
/* Get login page*/
router.get('/login', function (req, res, next) {
  res.render('login', { title: 'Login'});
});
/* Get login process page*/
router.post('/login', indexcontroller.processAddpage() , function (req, res, next) {
  res.render('login', { title: 'Login'});
});

/*Get perform logout*/
router.get('/logout', userController.performLogout);
module.exports = router;

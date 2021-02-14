/* This page adds routing for all pages in website
Author: Aritra Roy
     Student ID: 301176508
*/
let express = require('express');
let router = express.Router();

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
module.exports = router;

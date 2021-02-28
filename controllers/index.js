let express = require('express');

let Feedback = require('../models/feedback')

Feedback.firstName = null;
Feedback.lastName = null;
Feedback.number = null;
Feedback.email = null;
Feedback.message = null;

/* GET home page. */
module.exports.displayHomePage = (req, res, next) => {
  res.render('/index', {
    title: 'E-portfolio', 
    contact:Feedback,
    displayName: req.user ? req.user.displayName : ''
  });
};

/* GET about page. */
module.exports.displayAboutPage = (req, res, next) => {
  res.render('/about', { title: 'About',
  displayName: req.user ? req.user.displayName : '' });
};

/* GET projects page. */
module.exports.displayProjectPage =(req, res, next) => {
  res.render('/projects', { title: 'Projects',
  displayName: req.user ? req.user.displayName : '' });
};

/* GET Services page. */
module.exports.displayServicesPage = (req, res, next) => {
  res.render('/services', { title: 'Services',
  displayName: req.user ? req.user.displayName : '' });
};

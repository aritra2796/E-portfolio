var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* GET update contact*/
router.get('/update/:id', userController.displayUpdatepage);
/* POST update contact*/
router.post('/update/:id', userController.processUpdatepage);
/* Perform delete contact*/
router.get('/delete/:id', userController.performDelete);

module.exports = router;

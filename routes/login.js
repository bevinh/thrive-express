var express = require('express');
var passport = require('passport');  
var router = express.Router();


//router.post('/', function (req, res, next) {
 //   var emailAddress = req.body.emailAddress;
 //   var password = req.body.password;
 //   res.send('logged in ' + emailAddress + " " + password);
//});

router.post('/', passport.authenticate('local-login', {  
  successRedirect: '/course_list',
  failureRedirect: '/',
  failureFlash: true,
}));

module.exports = router;
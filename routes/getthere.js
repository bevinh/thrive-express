var express = require('express');
var passport = require('passport');  
var router = express.Router();

router.post('/', passport.authenticate('local-signup', {  
  successRedirect: '/course_list',
  failureRedirect: '/signup',
  failureFlash: true,
}));

module.exports = router;
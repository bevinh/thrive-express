var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('course_list', { title: 'Grow!'});
});

module.exports = router;
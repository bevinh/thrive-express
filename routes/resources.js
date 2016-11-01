var express = require('express');
var router = express.Router();

var resources = {
    "User Handout 1": {
        "title": "User Handout 1",
        "description": "Fanny pack vinyl put a bird in it",
    },
   "User Handout 2": {
        "title": "User Handout 2",
        "description": "Fanny pack vinyl put a bird in it",
    },
    "User Handout 3": {
        "title": "User Handout 3",
        "description": "Fanny pack vinyl put a bird in it",
    }
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('resources', { title: 'Grow!', resources: resources});
});

module.exports = router;
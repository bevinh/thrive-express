var express = require('express');
var router = express.Router();

var courses = {
    "Session 2": {
        "title": "Session 2: Interesting Relevant Title Here",
        "description": "Fanny pack vinyl put a bird in it",
        "image": "https://dummyimage.com/150x150/000/fff",
        "time" : "3 hours",
        "flag" : "active"
    },
    "Session 3": {
        "title": "Session 3: This Title is pretty cool too",
        "description": "Fanny pack vinyl put a bird in it",
        "image": "https://dummyimage.com/150x150/000/fff",
        "time" : "3 hours",
        "flag" : "inactive"
    },
    "Session 4": {
        "title": "Session 4: Interesting Stuff here too",
        "description": "Fanny pack vinyl put a bird in it",
        "image": "https://dummyimage.com/150x150/000/fff",
        "time" : "3 hours",
        "flag" : "inactive"
    }
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('course_list', { title: 'Grow!', courses: courses});
});

module.exports = router;
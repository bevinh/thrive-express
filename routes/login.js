var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    var emailAddress = req.body.emailAddress;
    var password = req.body.password;
    res.send('logged in ' + emailAddress + " " + password);
});

module.exports = router;
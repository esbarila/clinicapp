var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    console.log('hello world, im in the start page here')
    res.render('index');
});

module.exports = router;
/**
 * Created by Napalm on 2016-01-14.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
    res.render('test', { title: 'test html' });
});

module.exports = router;

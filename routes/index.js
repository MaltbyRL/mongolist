var express = require('express');
var router = express.Router();
var Item = require('../models/item');

// Populate and return Index
router.get('/', function(req, res, next) {
  Item.find({}, function(err, foundItems) {
    if (err) return res.status(400).send(err);

    res.render('index', { title: 'Express', items: foundItems });
  });



});

module.exports = router;

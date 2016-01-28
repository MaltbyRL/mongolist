var express = require('express');
var router = express.Router();
var Item = require('../models/item');

// Populate and return Index
router.get('/', function(req, res, next) {
  Item.find({}, function(err, foundItems) {
    if (err) return res.status(400).send(err);

    res.render('index', { title: 'Shop List', items: foundItems });
  });
});

router.get('/addItem', function(req, res, next) {
  res.render('addItem');
});

router.get('/itemSelect', function(req, res, next) {
  res.render('itemSelect');
});



module.exports = router;

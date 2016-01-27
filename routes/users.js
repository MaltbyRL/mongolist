'use strict';

var express = require('express');
var router = express.Router();
var fs = require('fs');
var ITEMDATA = './data/items.json';

/* GET items listing. */
router.get('/', function(req, res, next) {
  fs.readFile(ITEMDATA, function(err, data) {
    var items = JSON.parse(data);
    res.send(items);
  });
});

router.post('/', function(req, res, next) {
  fs.readFile(ITEMDATA, function(err, data) {
    var items = JSON.parse(data);
    items.push(req.body);
    fs.writeFile(ITEMDATA, JSON.stringify(items), function(err) {
      res.status(err ? 400 : 200).send(err || items);
    });
  });
});

module.exports = router;
//

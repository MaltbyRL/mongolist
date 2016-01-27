'use stict';

var express = require('express');
var router = express.Router();

var Item = require('../models/item');

// get all items
router.get('/', function(req, res, next) {
  Item.find({}, function(err, items) {
    res.status(err ? 400 : 200).send(err || items);
  });
});


// create new item
router.post('/', function(req, res) {
  var item = new Item(req.body);
  console.log("created new item", item);
  item.save(function(err, savedItem) {
    res.status(err ? 400 : 200).send(err || savedItem)
  });
});


// remove a item
router.delete('/:itemId', function(req, res) {
    Item.findById(req.params.itemId, function(err, item) {
      item.remove(function(err){
        res.status(err ? 400 : 200).send(err || null);
      });
    });
});


//change any field
// router.put('/:itemId');

//toggle
router.put('/:itemId/toggle', function(req, res) {
  Item.findById(req.params.itemId, function(err, item) {
    item.isCompleted = !item.isCompleted;
    item.save(function(err, savedItem) {
      res.status(err ? 400 : 200).send(err || savedItem);
    });
  });
});



module.exports = router;

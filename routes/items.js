var express = require('express');
var router = express.Router();

//get all array of items
router.get('/', function(req, res) {
  res.send('array of items!');
});

//create new item
router.post('/', function(req, res) {
  res.send(req.body);
});

//Update item
router.put('/', function(req, res) {
  res.send('trying to update item!');
});

module.exports = router;

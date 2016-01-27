'use strict';

var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  purchasedOn: { type: Date, default: Date.now() },
  description: {type: String }

});


var Item = mongoose.model('Item', itemSchema);

module.exports = Item;

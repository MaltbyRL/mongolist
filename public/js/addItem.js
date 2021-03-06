"use strict";

$(document).ready(init);

var $name, $description, $add, $price;

function init(){
  $name = $('#name');
  $description = $('#description');
  $price = $('#price');
  $add = $('#add');

  $add.click(addItem);
}

function addItem(e){
  var name = $name.val();
  var description = $description.val();
  var price = Number($price.val());
  console.log("Price:", price);
  var fixedPrice = price.toFixed(2)
  $price.val('');
  $description.val('');
  $name.val('');

  $.post('/items', {
    name: name,
    description: description,
    price: fixedPrice
  })
  .done(function(data) {
    console.log('response:', data);
    // location.replace('/');
  })
  .fail(function(err) {
    alert('Error. Check console. *_*');
    console.error('Error:', err);
  })
}

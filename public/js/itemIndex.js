"use strict";
$(document).ready(init);

function init(){
  $(".sortName").hover(handlerIn, handlerOut);
  $(".sortPrice").hover(handlerIn2, handlerOut2);
  $('.sortName').click(sortByNames);
  $('.sortPrice').click(sortByValue);
  $('.sortPrice').click(priceCheck);
}
var didSortName = false;
var didSortValue = false;


function handlerIn(){
  $(this).empty().append($("<span>SORT</span>"))
}
function handlerOut(){
  $(this).empty().append("Name:")
}

function handlerIn2(){
  $(this).empty().append($("<span>SORT</span>"))
}
function handlerOut2(){
  $(this).empty().append("Price:")
}



function sortByNames() {
  var rows = $('.itemRows');
  console.log("rows", rows);
  var sortedRows = rows.toArray().sort(function(a, b) {
    if(didSortName)return getName($(a)) > getName($(b));
    return getName($(a)) < getName($(b))
  });

  console.log('SORT:', sortedRows);
  $('#itemList').empty().append(sortedRows);
  didSortName = !didSortName
  function getName($elem) {
    return $elem.find('.name').text().toLowerCase();
  }
}

function priceCheck(){
  var $iRows = $('.itemRows').toArray();
  var total = 0;
  var price = ""

  function getVal($elem) {
    console.log($elem.find('.price').text());
  }

  console.log('Price', price )
}


function sortByValue() {
  var rows = $('.itemRows');
  //console.log("rowsVal init", rows);
  var sortedRows = rows.toArray().sort(function(a, b) {
    if(didSortValue)return getValue($(a)) > getValue($(b));
    return getValue($(a)) < getValue($(b));
  });

  //console.log('SORT:', sortedRows);
  $('#itemList').empty().append(sortedRows);
  didSortValue = !didSortValue
  function getValue($elem) {
    return $elem.find('.price').text().toLowerCase();
  }
}

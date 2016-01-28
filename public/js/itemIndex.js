"use strict";
$(document).ready(init);

function init(){
$(".sortName").hover(handlerIn, handlerOut);
$(".sortPrice").hover(handlerIn2, handlerOut2);
$('.sortName').click(sortByNames);
$('.sortPrice').click(sortByValue);
// $('.sortName').on("click", $revSortedName);


}
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
    return getName($(a)) > getName($(b));
  });
  console.log('SORT:', sortedRows);
  $('#itemList').empty().append(sortedRows);

  function getName($elem) {
    return $elem.find('.name').text().toLowerCase();
  }
}




function sortByValue() {
  var rows = $('.itemRows');
  console.log("rowsVal init", rows);
  var sortedRows = rows.toArray().sort(function(a, b) {
    return getValue($(a)) > getValue($(b));
  });
  console.log('SORT:', sortedRows);
  $('#itemList').empty().append(sortedRows);

  function getValue($elem) {
    return $elem.find('.price').text().toLowerCase();
  }
}

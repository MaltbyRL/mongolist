"use strict";
$(document).ready(init);

function init(){
$(".itemRows").hover(handlerIn, handlerOut)

}


function handlerIn(event){
  var values = event.currentTarget.val() 
  console.log("hovering", e )
}

function handlerOut(e){
  console.log("leaving");
}

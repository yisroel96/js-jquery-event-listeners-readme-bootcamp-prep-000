//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('hey!')

  })
}

function frameIt() {
  $('img').on('load', function() {
   $('img').addClass('tasty')
 })
}

function pressIt() {
  $('#typing').on('keydown', function(e) {
    alert('Your form is going to be submitted now.')
  })
}






$(document).ready(function(){

// call functions here

});

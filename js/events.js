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
    if (e.which === 71) {
      alert("You pressed 'g'!")
    }
  })
}






$(document).ready(function(){

// call functions here

});

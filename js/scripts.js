$(document).ready(function() {

  $("button").click( function(){
    $("body").toggleClass("dark-mode");
  });

  $("p").click( function() {

    $(this).toggleClass("highlight");
    
  })

});
$(document).ready(function(){

$("#about"). toggle(function() {
  $("#about"). text("About");

}, function() {
  $("#about"). text("About");
  $("textoabout"). toggle();
});

$("about"). click(function() {
  $("textoabout"). toggle();
});
};

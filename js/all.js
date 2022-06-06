$(document).ready(function() {
   $('.fa-bars').on('click',  function(e){
      e.preventDefault();
      $('nav').toggleClass('menuBox-show');
  });
});
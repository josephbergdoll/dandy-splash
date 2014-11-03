$(document).ready(function() {
  $('a.link-dandy').hover(function() {
    if ($('body').hasClass('dandy-clicked')) {
    }
    else {
      $('body').toggleClass('dandy-hovered');
    }
  });

  $('a.link-dandy').click(function(event) {
    event.preventDefault();
    $('body').toggleClass('dandy-clicked');
  });
});
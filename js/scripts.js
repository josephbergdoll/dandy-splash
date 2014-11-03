$(document).ready(function() {
  $('a.link-dandy').mouseenter(function() {
    if ($('body').hasClass('dandy-clicked')) {
      if ($('body').hasClass('hoverable')) {
        $('body').addClass('link-outer-hovered');
      }
    }
    else {
      $('body').addClass('dandy-hovered');
    }
  });

  $('a.link-dandy').mouseout(function() {
    if ($('body').hasClass('dandy-clicked')) {
      if ($('body').hasClass('hoverable')) {
        $('body').removeClass('link-outer-hovered');
      }
      else {
        $('body').addClass('hoverable');
      }
    }
    else {
      $('body').removeClass('dandy-hovered');
    }
  });

  $('a.link-dandy').click(function(event) {
    event.preventDefault();
    if ($('body').hasClass('dandy-clicked')) {
      $('body').removeClass('dandy-clicked');
      $('body').removeClass('hoverable');
      $('body').removeClass('link-outer-hovered');
    }
    else {
      $('body').addClass('dandy-clicked');
      setTimeout(function() {
        $('body').addClass('hoverable');
      }, 2000);
    }
  });

  $('a.link-outer').hover(function() {
    $('body').toggleClass('link-outer-hovered');
  });
});

$(window).load(function() {

  setTimeout(function() {
    $('a.link-dandy').css("opacity","1");
  },650);

});
function enterFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  }
}

$(window).on('click', enterFullScreen);

var counter = setInterval(function(){
  $('.count').text(Math.floor( $('.count').text() ) + parseInt( Math.random() * 4));

  if($('.count').text() > 90){
    clearInterval(counter);
    $('html,body').css('cursor', 'wait');
  }
}, 1000);
var appLauncher = jQuery('.app-launcher');

jQuery('.iphone').delegate('a:not(.home)', 'click', function (evt) {
  var elementPosition = $(this).position();
  
  appLauncher
      .removeClass('animated')
      .css({ 
        top: (elementPosition.top + evt.offsetY) + 'px',
        left: (elementPosition.left + evt.offsetX) + 'px'
      })
      .addClass('animated');
      
  window.setTimeout(function () {
    appLauncher.css({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: 'rgba(255, 255, 255, 1)'
      });
  }, 250);
  
  evt.preventDefault();
});

jQuery('.home').click(function () {
  appLauncher
      .removeClass('animated')
      .css({ 
        top: 0,
        right: '100%',
        bottom: '100%',
        left: 0,
        background: 'rgba(255, 255, 255, 0)'
      });
});
(function($) {
  'use strict';
  $(function() {
    $('#show').avgrund({
      height: 200,
      holderClass: 'custom',
      showClose: true,
      showCloseText: 'x',
      onBlurContainer: '.container-scroller',
      template: 'hola mundo'
    });
  })
})(jQuery);
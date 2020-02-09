
(function($){
    $(function() {
      $('.nav__icon').on('click', function() {
        $(this).closest('.nav__icon').toggleClass('nav__state_open');
      });
    });
});
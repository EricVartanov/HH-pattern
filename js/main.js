$("body").on('click', "a[href^='#']", function(e) {
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);
    e.preventDefault();
});
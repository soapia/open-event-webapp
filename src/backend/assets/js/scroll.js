      $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var href = $(this).attr('href');
        var link = href.split('#')[1]; 
        var selector = "a[id='" + link + "']";
        var target = $(selector);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

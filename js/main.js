$.fn.followTo = function () {
  var $this = this,
      $window = $(window),
      pos = 60;

  $this.css({
    'background-position': 'center ' + pos + 'px',
    'background-attachment': 'scroll'
  });

  $window.scroll(function (e) {
    if ($window.scrollTop() > pos) {
      $this.css({
        'background-position': 'center 0px',
        'background-attachment': 'fixed'
      });
    } else {
      $this.css({
        'background-position': 'center ' + pos + 'px',
        'background-attachment': 'scroll'
      });
    }
  });
  $window.load(function (e) {
    if ($window.scrollTop() > pos) {
      $this.css({
        'background-position': 'center 0px',
        'background-attachment': 'fixed'
      });
    } else {
      $this.css({
        'background-position': 'center ' + pos + 'px',
        'background-attachment': 'scroll'
      });
    }
  });
};

jQuery(document).ready(function() {
    $('body').followTo();
    $('a').click(function(event) {
      event.preventDefault()

    });
        $('.grid-header li a').click(function() {
        var category = $(this).attr('id');
        var $anime = $('.grid-header li #anime');
        var $drama = $('.grid-header li #drama');
        var $pop = $('.grid-header li #pop');
        if(category == "anime"){
          $('a').removeClass('active');
          $anime.addClass('active');
        } else if(category == "drama"){
          $('a').removeClass('active');
          $drama.addClass('active');
        } else if(category == "pop"){
          $('a').removeClass('active');
          $pop.addClass('active');

        }

    });





});

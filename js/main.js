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
  $('.grid-header li a').click(function(event) {

    event.preventDefault();

    var $this = $(this);
    var category = $(this).attr('id');
    var $gridnavLinks = $('.grid-header li a');

    // Remove the naviation active class on all nav links
    $($gridnavLinks).removeClass('active');
    $(this).addClass('active');
    
  });





});

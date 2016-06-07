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
    var $gridTabContent = $('.grid-tab-content');
    var $quickanimeList = $('.quick-anime');

    // Remove the naviation active class on all nav links
    $gridnavLinks.removeClass('active');
    $gridTabContent.removeClass('active');
    $quickanimeList.removeClass('active');
    $('#' + category + '_tab_content').addClass("active");
    $('#' + category + '_quickanime').addClass("active");
    $this.addClass('active');

  });

  $('.grid-hover').hover(function(){
    var $this = $(this);
      $(this).prepend('<button class="btn">Add to Queue</button>');
  }, function() {
    $('.btn').remove();
  });


  $('.grid-hover').hover(function() {
    var $this = $(this);
    var title = $this.find('.title').html();
    var description = $this.find('.description').text();
    $this.append('<div class="hoverInfo">' + title + '<br /><p>' + description  +'</p>' + '</div>');
  }, function() {
    $('.hoverInfo').remove();
  });


});

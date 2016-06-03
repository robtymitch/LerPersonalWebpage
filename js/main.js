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

    if(category === "anime"){
      $('#show1 img').attr('src','http://img1.ak.crunchyroll.com/i/spire1/958243dc68ae929a6b9cb834165112471456969325_thumb.jpg');
      $('#show1 .title').text('Naruto Shippuden');
      $('#show1 .paragraph').text('462 Videos');
      $('#show2 img').attr('src','http://img1.ak.crunchyroll.com/i/spire1/e7c936b5eacd4fd0f89bd7b651954e6b1383245216_thumb.jpg');
      $('#show2 .title').text('One Piece');
      $('#show2 .paragraph').text('952 Videos');
      $('#show3 img').attr('src','http://img1.ak.crunchyroll.com/i/spire2/0d9b4b1ea1fa85abd0472c0d1314c2601459549637_thumb.jpg');
      $('#show3 .title').text('Twin Star Exorcists');
      $('#show3 .paragraph').text('8 Videos');
      $('#show4 img').attr('src','http://img1.ak.crunchyroll.com/i/spire2/09d6369bbb11a79e54c31483ea6527031459551925_thumb.jpg');
      $('#show4 .title').text('JoJo');
      $('#show4 .paragraph').text('86 Videos');
      }
    if(category === "drama"){
      $('#show1 img').attr('src','http://img1.ak.crunchyroll.com/i/spire1/3999468c85d84fec48ef4e9285126cdc1435357508_thumb.jpg');
      $('#show1 .title').text('Death Note (Drama)');
      $('#show1 .paragraph').text('11 Videos');
      $('#show2 img').attr('src','http://img1.ak.crunchyroll.com/i/spire2/40c1b21442b151f2ab2cecda1c5467531388785705_thumb.jpg');
      $('#show2 .title').text('Mischievous Kiss');
      $('#show2 .paragraph').text('16 Videos');
      $('#show3 img').attr('src','http://img1.ak.crunchyroll.com/i/spire4/972bb4aa57b21729744eb9883640a9601413061024_thumb.jpg');
      $('#show3 .title').text('Switch Girl');
      $('#show3 .paragraph').text('16 Videos');
      $('#show4 img').attr('src','http://img1.ak.crunchyroll.com/i/spire1/96a49f3f80ee6fe27ff7fd5282400dd61463451797_thumb.jpg');
      $('#show4 .title').text('GTO');
      $('#show4 .paragraph').text('25 Videos');

      }
    if(category === "pop"){
      $('#show1 img').attr('src','http://img1.ak.crunchyroll.com/i/spire1/0a46fd629f3d942d40528e310aaf60f31344473013_thumb.jpg');
      $('#show1 .title').text('TheInsaneGamefreak');
      $('#show1 .paragraph').text('99 Videos');
      $('#show2 img').attr('src','http://img1.ak.crunchyroll.com/i/spire3/b656b7648c1e9fcd5b13dd6ff94b23391259055433_thumb.jpg');
      $('#show2 .title').text('vistlip');
      $('#show2 .paragraph').text('6 videos');
      $('#show3 img').attr('src','http://img1.ak.crunchyroll.com/i/spire4/1616a4bbd747b09f6f45bf09afa87fd21426229534_thumb.jpg');
      $('#show3 .title').text('Crunchyroll Collection');
      $('#show3 .paragraph').text('14 Videos');
      $('#show4 img').attr('src','http://img1.ak.crunchyroll.com/i/spire1/b9261278dc49bfeaf24c4f76f85899401327554176_thumb.png');
      $('#show4 .title').text('Culture Japan');
      $('#show4 .paragraph').text('26 Videos');
      }
    // Remove the naviation active class on all nav links
    $($gridnavLinks).removeClass('active');
    $(this).addClass('active');

  });





});

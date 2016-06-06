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

    var s1Img = $('#show1 img');
    var s1Title = $('#show1 .title');
    var s1Para = $('#show1 .paragraph')
    var s2Img = $('#show2 img');
    var s2Title = $('#show2 .title');
    var s2Para = $('#show2 .paragraph')
    var s3Img = $('#show3 img');
    var s3Title = $('#show3 .title');
    var s3Para = $('#show3 .paragraph')
    var s4Img = $('#show4 img');
    var s4Title = $('#show4 .title');
    var s4Para = $('#show4 .paragraph');
    var f1Img = $('.feature1 img');
    var f1Title = $('.feature1 .title');

    if(category === "anime"){
      s1Img.attr('src','http://img1.ak.crunchyroll.com/i/spire1/958243dc68ae929a6b9cb834165112471456969325_thumb.jpg');
      s1Title.text('Naruto Shippuden');
      s1Para.text('462 Videos');
      s2Img.attr('src','http://img1.ak.crunchyroll.com/i/spire1/e7c936b5eacd4fd0f89bd7b651954e6b1383245216_thumb.jpg');
      s2Title.text('One Piece');
      s2Para.text('952 Videos');
      s3Img.attr('src','http://img1.ak.crunchyroll.com/i/spire2/0d9b4b1ea1fa85abd0472c0d1314c2601459549637_thumb.jpg');
      s3Title.text('Twin Star Exorcists');
      s3Para.text('8 Videos');
      s4Img.attr('src','http://img1.ak.crunchyroll.com/i/spire2/09d6369bbb11a79e54c31483ea6527031459551925_thumb.jpg');
      s4Title.text('JoJo');
      s4Para.text('86 Videos');
      }
    if(category === "drama"){
      s1Img.attr('src','http://img1.ak.crunchyroll.com/i/spire1/3999468c85d84fec48ef4e9285126cdc1435357508_thumb.jpg');
      s1Title.text('Death Note (Drama)');
      s1Para.text('11 Videos');
      s2Img.attr('src','http://img1.ak.crunchyroll.com/i/spire2/40c1b21442b151f2ab2cecda1c5467531388785705_thumb.jpg');
      s2Title.text('Mischievous Kiss');
      s2Para.text('16 Videos');
      s3Img.attr('src','http://img1.ak.crunchyroll.com/i/spire4/972bb4aa57b21729744eb9883640a9601413061024_thumb.jpg');
      s3Title.text('Switch Girl');
      s3Para.text('16 Videos');
      s4Img.attr('src','http://img1.ak.crunchyroll.com/i/spire1/96a49f3f80ee6fe27ff7fd5282400dd61463451797_thumb.jpg');
      s4Title.text('GTO');
      s4Para.text('25 Videos');

      }
    if(category === "pop"){
      s1Img.attr('src','http://img1.ak.crunchyroll.com/i/spire1/0a46fd629f3d942d40528e310aaf60f31344473013_thumb.jpg');
      s1Title.text('TheInsaneGamefreak');
      s1Para.text('99 Videos');
      s2Img.attr('src','http://img1.ak.crunchyroll.com/i/spire3/b656b7648c1e9fcd5b13dd6ff94b23391259055433_thumb.jpg');
      s2Title.text('vistlip');
      s2Para.text('6 videos');
      s3Img.attr('src','http://img1.ak.crunchyroll.com/i/spire4/1616a4bbd747b09f6f45bf09afa87fd21426229534_thumb.jpg');
      s3Title.text('Crunchyroll Collection');
      s3Para.text('14 Videos');
      s4Img.attr('src','http://img1.ak.crunchyroll.com/i/spire1/b9261278dc49bfeaf24c4f76f85899401327554176_thumb.png');
      s4Title.text('Culture Japan');
      s4Para.text('26 Videos');
      }
    // Remove the naviation active class on all nav links
    $($gridnavLinks).removeClass('active');
    $(this).addClass('active');

  });





});

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
    var f1Img = $('.sidebar .feature1 img');
    var f1Title = $('.sidebar .feature1 .title');
    var f1Para= $('.sidebar .feature1 .paragraph');
    var f2Img = $('.sidebar .feature2 img');
    var f2Title = $('.sidebar .feature2 .title');
    var f2Para= $('.sidebar .feature2 .paragraph');
    var f3Img = $('.sidebar .feature3 img');
    var f3Title = $('.sidebar .feature3 .title');
    var f3Para= $('.sidebar .feature3 .paragraph');
    var f4Img = $('.sidebar .feature4 img');
    var f4Title = $('.sidebar .feature4 .title');
    var f4Para= $('.sidebar .feature4 .paragraph');
    var f5Img = $('.sidebar .feature5 img');
    var f5Title = $('.sidebar .feature5 .title');
    var f5Para= $('.sidebar .feature5 .paragraph');

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
      s4Title.text('JoJo\'s Bizarre Adventure');
      s4Para.text('86 Videos');
      f1Img.attr('src','http://img1.ak.crunchyroll.com/i/spire1/958243dc68ae929a6b9cb834165112471456969325_small.jpg');
      f1Title.text('Naruto Shippuden');
      f1Para.text('462 Videos');
      f2Img.attr('src','http://img1.ak.crunchyroll.com/i/spire1/e7c936b5eacd4fd0f89bd7b651954e6b1383245216_small.jpg');
      f2Title.text('One Piece');
      f2Para.text('952 Videos');
      f3Img.attr('src','http://img1.ak.crunchyroll.com/i/spire2/0d9b4b1ea1fa85abd0472c0d1314c2601459549637_small.jpg');
      f3Title.text('Twin Star Exorcists');
      f3Para.text('8 Videos');
      f4Img.attr('src','http://img1.ak.crunchyroll.com/i/spire3/44012ca32feaa6672a77c7901ad24af91459548790_small.jpg');
      f4Title.text('Bungo Stray Dogs');
      f4Para.text('8 Videos');
      f5Img.attr('src','http://img1.ak.crunchyroll.com/i/spire2/09d6369bbb11a79e54c31483ea6527031459551925_small.jpg');
      f5Title.text('JoJo\'s Bizarre Adventure');
      f5Para.text('86 Videos');
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
      f1Img.attr('src','http://img1.ak.crunchyroll.com/i/spire1/3999468c85d84fec48ef4e9285126cdc1435357508_small.jpg');
      f1Title.text('Death Note (Drama)');
      f1Para.text('11 Videos');
      f2Img.attr('src','http://img1.ak.crunchyroll.com/i/spire2/40c1b21442b151f2ab2cecda1c5467531388785705_small.jpg');
      f2Title.text('Mischievous Kiss');
      f2Para.text('16 Videos');
      f3Img.attr('src','http://img1.ak.crunchyroll.com/i/spire4/972bb4aa57b21729744eb9883640a9601413061024_small.jpg');
      f3Title.text('Switch Girl');
      f3Para.text('16 Videos');
      f4Img.attr('src','http://img1.ak.crunchyroll.com/i/spire2/6d56503b0c862829705f3aa1bee329e61452433938_small.jpg');
      f4Title.text('Wakakozake (Drama)');
      f4Para.text('24 Videos');
      f5Img.attr('src','http://img1.ak.crunchyroll.com/i/spire4/30b59b197a01a614e7e55b1886c2d3ef1410486118_small.jpg');
      f5Title.text('Mischievous Kiss 2 - Love in Tokyo');
      f5Para.text('17 Videos');

      }
    if(category === "pop"){
      s1Img.attr('src','http://img1.ak.crunchyroll.com/i/spire1/0a46fd629f3d942d40528e310aaf60f31344473013_thumb.jpg');
      s1Title.text('TheInsaneGamefreak');
      s1Para.text('99 Videos');
      s2Img.attr('src','http://img1.ak.crunchyroll.com/i/spire2/ec9edd88931b965309172339e48b6c801374534996_thumb.jpg');
      s2Title.text('Maple Story')
      s2Para.text('12 videos');
      s3Img.attr('src','http://img1.ak.crunchyroll.com/i/spire4/1616a4bbd747b09f6f45bf09afa87fd21426229534_thumb.jpg');
      s3Title.text('Crunchyroll Collection');
      s3Para.text('14 Videos');
      s4Img.attr('src','http://img1.ak.crunchyroll.com/i/spire1/b9261278dc49bfeaf24c4f76f85899401327554176_thumb.png');
      s4Title.text('Culture Japan');
      s4Para.text('26 Videos');
      f1Img.attr('src','http://img1.ak.crunchyroll.com/i/spire2/ec9edd88931b965309172339e48b6c801374534996_small.jpg');
      f1Title.text('Maple Story');
      f1Para.text('12 Videos');
      f2Img.attr('src','http://img1.ak.crunchyroll.com/i/spire4/95f76d05a9650a3d4b3b4c00e18da45e1396908652_small.jpg');
      f2Title.text('Crunchyroll x Tokyo');
      f2Para.text('5 Videos');
      f3Img.attr('src','http://img1.ak.crunchyroll.com/i/spire1/b9261278dc49bfeaf24c4f76f85899401327554176_small.png');
      f3Title.text('Culture Japan');
      f3Para.text('26 Videos');
      f4Img.attr('src','http://img1.ak.crunchyroll.com/i/spire1/0a46fd629f3d942d40528e310aaf60f31344473013_small.jpg');
      f4Title.text('TheInsaneGamefreak');
      f4Para.text('99 Videos');
      f5Img.attr('src','http://img1.ak.crunchyroll.com/i/spire3/0843f4d0ab50f074abc2e0fbe66a93601288299556_small.jpg');
      f5Title.text('Jin Akanishi');
      f5Para.text('3 Videos');
      }
    // Remove the naviation active class on all nav links
    $($gridnavLinks).removeClass('active');
    $(this).addClass('active');

  });

  $('.grid-hover').hover(function() {
    var $this = $(this);
    var $title = $(this).attr('.title')
    $(this).append('<div class="hoverInfo">' + $title + '<p class="info">' + '</div>');
  }, function() {
    $('.hoverInfo').remove();
  });






});

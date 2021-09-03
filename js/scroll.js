//inspired by https://codepen.io/daveredfern/pen/zBGBJV
//change background color on scroll
$(window).scroll(function() {
    // selectors
    var $window = $(window),
        $body = $('body'),
        $panel = $('.panel');
    
    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);
   
    $panel.each(function () {
      var $this = $(this);
      
      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
         
        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
      }
    });    
    
  }).scroll();


//fade in on scroll into frame
$(window).scroll(function() {
  // Setting: start fading in at bottom of page
  var startPos = 0.6;

  // Cache window object
  var $w = $(window);

  // Basically, we go through each element and check its relative position within the viewport
  $('.fadeIn').each(function() {

    // Get current relative position in viewport, based on the top edge
    var pos = $(this).offset().top - $w.scrollTop();

    // Get viewport height
    var vh = $w.height();
    console.log("Pos: " + (vh - pos) + ", vh: " + vh + ", startPos: " + startPos);
    //console.log(pos / (vh * startPos));
    if (pos > vh * startPos) {
      $(this).css('opacity', (vh - pos) / (vh * (1 - startPos)) );
      
    } else {
      // If element has past the starting threshold, we fade it
      $(this).css('opacity', 1);
    }
  });
});
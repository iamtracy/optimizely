$('.trusted-company-img-container')

 var sponsorHeight = -1,
  iShowTitleMaxHeight = -1;
  if ($(window).width() > 760){
    //Card Header
    $('.card').each(function() {
      if ($(this).height() > iCardMaxHeight) {
        iCardMaxHeight = $(this).height();
      }
    });
    //Show Title 
    $('.show-title').each(function() {
      if ($(this).height() > iShowTitleMaxHeight) {
        iShowTitleMaxHeight = $(this).height();
      }
    });
    $('.show-title').height(iShowTitleMaxHeight);
  } else {
      $( window ).resize(function() {
      //Card Header
      $('.card-header').each(function() {
        if ($(this).height() > iCardMaxHeight) {
          iCardMaxHeight = $(this).height();
        }
      });
      //Show Title 
      $('.show-title').each(function() {
        if ($(this).height() > iShowTitleMaxHeight) {
          iShowTitleMaxHeight = $(this).height();
        }
      });
      $('.show-title').height(iShowTitleMaxHeight);
    }); 
  }
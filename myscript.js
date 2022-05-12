$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 1200) {
      $('.requirements-1').fadeIn();
    } else {
        $('.requirements-1').fadeOut();  
    }
    if (y > 1300) {
        $('.requirements-2').fadeIn();
      } else {
          $('.requirements-2').fadeOut();  
    }
    if (y > 1400) {
        $('.requirements-3').fadeIn();
      } else {
          $('.requirements-3').fadeOut();  
    }
    if (y > 1500) {
        $('.requirements-4').fadeIn();
      } else {
          $('.requirements-4').fadeOut();  
    }
    if (y > 1600) {
        $('.requirements-5').fadeIn();
      } else {
          $('.requirements-5').fadeOut();  
    }
          
    // if (y > 1850) {
    //     $('.requirements-2').fadeIn(); 
    // } 
    // if (y > 1900) {
    //     $('.requirements-3').fadeIn();
    // } 
    // if (y > 1950) {
    //     $('.requirements-3').fadeIn();
    // }     
  });


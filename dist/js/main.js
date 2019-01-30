$('.container__slider').slick({
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: false
});

$('.container-platform-slider__slide').slick({
  infinite: false,
  speed: 1000,
  slidesToShow: 4,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    }, 
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});


//Modal window Sign In

$('#signInBtn').click(function() {
  $.fancybox.destroy();
  $.fancybox.open( $('#modalSignIn'), {
    modal: true
  });
});

$('#signIn-2').click(function() {
  $.fancybox.destroy();
  $.fancybox.open( $('#modalSignIn'), {
    modal: true
  });
});

$('#signIn-3').click(function() {
  $.fancybox.destroy();
  $.fancybox.open( $('#modalSignIn'), {
    modal: true
  });
});

$('#signIn-4').click(function() {
  $.fancybox.destroy();
  $.fancybox.open( $('#modalSignIn'), {
    modal: true
  });
});

$('#signUpurl').click(function(e) {
  e.preventDefault();
  $.fancybox.destroy();
  $.fancybox.open( $('#modalSignUp'), {
    modal: true
  });
});

$('#back-sihnIn').click(function(e) {
  e.preventDefault();
  $.fancybox.destroy();
  $.fancybox.open( $('#modalSignIn'), {
    modal: true
  });
});

$('#secondBtn').click(function() {
  $.fancybox.destroy();
  $.fancybox.open( $('#modalSignIn'), {
    modal: true
  });
});
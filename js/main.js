// Loading Common Element Using External File
// $("#header").load("header.html");
$("#footer").load("footer.html");


// AOS Js (Reveal Animation)
AOS.init();


$('.testimonal-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.about-slider').slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.contact-slider').slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$(".menu-btn").click(function () {
  $('body').addClass("overflow-hidden");
  $('.navbar-cus').addClass("active");
})
$(".close-btn .fal").click(function () {
  $('body').removeClass("overflow-hidden");
  $('.navbar-cus').removeClass("active");
})
$('.nav-link-1').hover(function () {

})
$(".nav-link-1").hover(function () {
  $('.navbar-cus').css("background-color", "#DA1934");
}, function () {
  $('.navbar-cus').css("background-color", "#F5E8C6");
});
$(".nav-link-2").hover(function () {
  $('.navbar-cus').css("background-color", "#FCDE4A");
}, function () {
  $('.navbar-cus').css("background-color", "#F5E8C6");
});
$(".nav-link-3").hover(function () {
  $('.navbar-cus').css("background-color", "#009543");
}, function () {
  $('.navbar-cus').css("background-color", "#F5E8C6");
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('header').addClass('active');
  } else {
    $('header').removeClass('active');
  }
});

// -----====== Counter Player =======-----
var counter = $(".counter").offset().top - 300;
$(window).scroll(function () {
  var scrTop = $(window).scrollTop();
  if (scrTop > counter) {
    $(".num").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");

      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 1000,
          easing: "linear",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
  }
});
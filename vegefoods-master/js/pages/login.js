AOS.init({
  duration: 800,
  easing: 'slide'
});

(function ($) {

  "use strict";

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };


  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


  var fullHeight = function () {

    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function () {
      $('.js-fullheight').css('height', $(window).height());
    });

  };
  fullHeight();

  // loader
  var loader = function () {
    setTimeout(function () {
      if ($('#ftco-loader').length > 0) {
        $('#ftco-loader').removeClass('show');
      }
    }, 1);
  };
  loader();

  // Scrollax
  $.Scrollax();

  var carousel = function () {
    $('.home-slider').owlCarousel({
      loop: true,
      autoplay: true,
      margin: 0,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      nav: false,
      autoplayHoverPause: false,
      items: 1,
      navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });

    $('.carousel-testimony').owlCarousel({
      center: true,
      loop: true,
      items: 1,
      margin: 30,
      stagePadding: 0,
      nav: false,
      navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
    });

  };
  carousel();

  $('nav .dropdown').hover(function () {
    var $this = $(this);
    // 	 timer;
    // clearTimeout(timer);
    $this.addClass('show');
    $this.find('> a').attr('aria-expanded', true);
    // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
    $this.find('.dropdown-menu').addClass('show');
  }, function () {
    var $this = $(this);
    // timer;
    // timer = setTimeout(function(){
    $this.removeClass('show');
    $this.find('> a').attr('aria-expanded', false);
    // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
    $this.find('.dropdown-menu').removeClass('show');
    // }, 100);
  });


  $('#dropdown04').on('show.bs.dropdown', function () {
    console.log('show');
  });

  $('#dropdown05').on('show.bs.dropdown', function () {
    console.log('show');
  });

  // scroll
  var scrollWindow = function () {
    $(window).scroll(function () {
      var $w = $(this),
        st = $w.scrollTop(),
        navbar = $('.ftco_navbar'),
        sd = $('.js-scroll-wrap');

      if (st > 150) {
        if (!navbar.hasClass('scrolled')) {
          navbar.addClass('scrolled');
        }
      }
      if (st < 150) {
        if (navbar.hasClass('scrolled')) {
          navbar.removeClass('scrolled sleep');
        }
      }
      if (st > 350) {
        if (!navbar.hasClass('awake')) {
          navbar.addClass('awake');
        }

        if (sd.length > 0) {
          sd.addClass('sleep');
        }
      }
      if (st < 350) {
        if (navbar.hasClass('awake')) {
          navbar.removeClass('awake');
          navbar.addClass('sleep');
        }
        if (sd.length > 0) {
          sd.removeClass('sleep');
        }
      }
    });
  };
  scrollWindow();


  var counter = function () {

    $('#section-counter').waypoint(function (direction) {

      if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
        $('.number').each(function () {
          var $this = $(this),
            num = $this.data('number');
          console.log(num);
          $this.animateNumber(
            {
              number: num,
              numberStep: comma_separator_number_step
            }, 7000
          );
        });

      }

    }, { offset: '95%' });

  }
  counter();

  var contentWayPoint = function () {
    var i = 0;
    $('.ftco-animate').waypoint(function (direction) {

      if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

        i++;

        $(this.element).addClass('item-animate');
        setTimeout(function () {

          $('body .ftco-animate.item-animate').each(function (k) {
            var el = $(this);
            setTimeout(function () {
              var effect = el.data('animate-effect');
              if (effect === 'fadeIn') {
                el.addClass('fadeIn ftco-animated');
              } else if (effect === 'fadeInLeft') {
                el.addClass('fadeInLeft ftco-animated');
              } else if (effect === 'fadeInRight') {
                el.addClass('fadeInRight ftco-animated');
              } else {
                el.addClass('fadeInUp ftco-animated');
              }
              el.removeClass('item-animate');
            }, k * 50, 'easeInOutExpo');
          });

        }, 100);

      }

    }, { offset: '95%' });
  };
  contentWayPoint();


  // navigation
  var OnePageNav = function () {
    $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function (e) {
      e.preventDefault();

      var hash = this.hash,
        navToggler = $('.navbar-toggler');
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, 'easeInOutExpo', function () {
        window.location.hash = hash;
      });


      if (navToggler.is(':visible')) {
        navToggler.click();
      }
    });
    $('body').on('activate.bs.scrollspy', function () {
      console.log('nice');
    })
  };
  OnePageNav();


  // magnific popup
  $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });



  var goHere = function () {

    $('.mouse-icon').on('click', function (event) {

      event.preventDefault();

      $('html,body').animate({
        scrollTop: $('.goto-here').offset().top
      }, 500, 'easeInOutExpo');

      return false;
    });
  };
  goHere();


  function makeTimer() {

    var endTime = new Date("21 December 2019 9:56:00 GMT+01:00");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");

  }

  setInterval(function () { makeTimer(); }, 1000);

})(jQuery);



//-------------------------------------------
"use strict";
/*** REGION 1 - Global variables - V??ng khai b??o bi???n, h???ng s???, tham s??? TO??N C???C */
var gToken = getCookie("token"); //get token on Cookie
var gCartArr = [];
const gURL_LOGIN = "http://localhost:8080/login";


/*** REGION 2 - V??ng g??n / th???c thi s??? ki???n cho c??c elements */
$(document).ready(function () {
  // G???i s??? ki???n load trang
  onPageLoading();

  // G??n s??? ki???n khi submit form login (form code b??n html d??ng th??? <form> n??n ph???i d??ng code n??y)
  $("#form-submit").on("submit", function (e) {
    e.preventDefault();
    onBtnLoginClick();
  });

  // S??? d???ng c??ch g??n s??? ki???n n??y khi kh???i form code trong html d??ng th??? <div>
  // $("#btn-login").on("click", onBtnLoginClick);

  // G??n s??? ki???n khi click btn Logout
  $("#log_out").on("click", onBtnLogOutClick);
});

/*** REGION 3 - Event handlers - V??ng khai b??o c??c h??m x??? l?? s??? ki???n */
// H??m x??? l?? c??c s??? ki???n load trang
function onPageLoading() {
  "use strict";
  // check n???u ch??a c?? cart trong localSto th?? kh???i t???o
  if (localStorage.cart == undefined) {
    localStorage.cart = "";
  }

  // thu th???p sp trong cart ??? localStorage
  if (localStorage.cart != "") {
    gCartArr = JSON.parse(localStorage.cart);
  }
  console.log(gCartArr);

  // hi???n th??? l??n icon cart th??ng b??o
  $("#number-of-products").html(`<span class="icon-shopping_cart"></span>[${gCartArr.length}]`);

  // show html "Login" n???u username in local ch??a ??c t???o
  if (localStorage.username == undefined || gToken == "") {
    $("#dropdown05").html(`<span class="icon-user"></span> Login</a>`);
    localStorage.username = "";
  }

  // x??? l?? t??c v??? khi c?? username trong local
  if (localStorage.username != "") {
    // show username to navbar if exist username's value in localStorage
    $("#dropdown05").html(`<span class="icon-user"></span> ${localStorage.username}</a>`);

    // show Logout function if exist username's value in localStorage
    $("#log_out").removeClass("d-none");

    // N???u c?? quy???n Admin th?? show button truy c???p Page Admin (t??nh n??ng Ph??n quy???n)
    checkAdminAndHandle();
  }

}

// H??m x??? l?? s??? ki???n login
function onBtnLoginClick() {
  // debugger;
  "use strict";
  //B0: khai b??o ?????i t?????ng ch???a d??? li???u
  var vLoginObj = {
    username: "",
    password: ""
  };
  // B1: thu th???p d??? li???u
  getLoginData(vLoginObj);

  // B2: validate d??? li???u
  var vIsValidated = validateLoginData(vLoginObj);
  if (vIsValidated) {

    // B3: call API login data to det Token + hi???n th??? console
    loginFunction(vLoginObj);
  }
}

// H??m x??? l?? s??? ki???n click v??o btn Log out
function onBtnLogOutClick() {
  "use strict";
  deleteCookie("token");
  localStorage.username = "";
  $("#log_out").addClass("d-none");
  $("#page_admin").addClass("d-none");
  $("#dropdown05").html(`<span class="icon-user"></span> Login</a>`);
}

/*** REGION 4 - Common funtions - V??ng khai b??o h??m d??ng chung trong to??n b??? ch????ng tr??nh*/
// H??m x??? l?? s??? ki???n login get token
function loginFunction(paramLoginObj) {
  "use strict";
  //--- ????y l?? c??ch call theo data-json
  $.ajax({
    url: gURL_LOGIN,
    type: 'POST',
    data: JSON.stringify(paramLoginObj),
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (pRes) {
      responseHandler(pRes);
    },
    error: function (pAjaxContext) {
      if (pAjaxContext.status === 200) { // call success
        toastr.success("login successfully &#128512;");
        gToken = pAjaxContext.responseText;
        console.log(gToken);
        // x??? l?? response (Token)
        responseHandler(pAjaxContext.responseText);
        // l??u username v??o localStorage
        localStorage.username = paramLoginObj.username;
        // x??? l?? hi???n th???
        $("#dropdown05").html(`<span class="icon-user"></span> ${localStorage.username}</a>`);
        $("#log_out").removeClass("d-none");

        // N???u c?? quy???n Admin th?? show button truy c???p Page Admin (t??nh n??ng Ph??n quy???n)
        checkAdminAndHandle();

      } else { // call failed
        toastr.error(pAjaxContext.responseText);
      }
    }
  });

  // API theo ?????c t??? s??? call theo data-form ch??? kh??ng ph???i ki???u json n??n c???n khai b??o form-data
  /*
  var vFormData = new FormData();
  vFormData.append('email', paramLoginObj.email);
  vFormData.append('password', paramLoginObj.password);

  $.ajax({
    type: "POST",
    url: gURL_LOGIN,
    data: vFormData,
    contentType: false,
    cache: false,
    processData: false,
    success: function (resObj) {
      responseHandler(resObj);
    },
    error: function (xhr) {
      // L???y error message
      var vErrMessage = xhr.responseJSON.message;
      console.log(vErrMessage);
    }
  });  */

}

// function to get login data on form
function getLoginData(paramLoginObj) {
  "use strict";
  paramLoginObj.username = $("#inp-username").val().trim();
  paramLoginObj.password = $("#inp-password").val().trim();
  // paramLoginObj.rememberUser = $('#ckb-remember-account').is(":checked");
}

// h??m validate d??? li???u login
function validateLoginData(paramLoginObj) {
  "use strict";
  if (paramLoginObj.username === "") {
    toastr.error("B???n c???n nh???p username");
    return false;
  }
  if (paramLoginObj.password === "") {
    toastr.error("B???n c???n nh???p password");
    return false;
  }
  return true;
}

// H??m validate email b???ng regrex
/*
function validateEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return  */

// H??m x??? l?? check quy???n Admin (Authorization) v?? x??? l?? s??? ki???n
function checkAdminAndHandle() {
  "use strict";
  // N???u c?? quy???n Admin th?? show button truy c???p Page Admin (t??nh n??ng Ph??n quy???n)
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/hello4",
    // g???n k??m token v??o Header ????? x??c th???c
    headers: { "Authorization": "Token " + gToken },
    success: function (response) {
      console.log(response); // 'hello admin'
      // show btn Page Admin
      $("#page_admin").removeClass("d-none");
    },
    error: function (ajaxContext) {
      $("#page_admin").addClass("d-none");
    }
  });

}

//X??? l?? object tr??? v??? khi login th??nh c??ng
function responseHandler(data) {
  //L??u token v??o cookie trong 1 ng??y
  setCookie("token", data, 1);
  //chuy???n sang trang user infomation
  // window.location.href = "/shop24h-frontend/vegefoods-master/userInfo.html";
}

//H??m setCookie ???? gi???i thi???u ??? b??i tr?????c
function setCookie(cname, cvalue, exdays) {
  "use strict";
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//H??m get Cookie ???? gi???i thi???u ??? b??i tr?????c
function getCookie(cname) {
  "use strict";
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// H??m delete Cookie theo name
function deleteCookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}



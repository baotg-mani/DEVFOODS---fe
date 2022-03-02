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



//---------------------------------------
//---------------------------------------

$(document).ready(function () {

  /*** REGION 1 - Global variables - Vùng khai báo biến, hằng số, tham số TOÀN CỤC */
  var gCartArr = [];
  var gDistinctArr = [];
  var gCustomerId = null;
  var gOrderId = null;
  var gTotal = null;


  /*** REGION 2 - Vùng gán / thực thi hàm xử lý sự kiện cho các elements */
  // thực thi sự kiện load trang
  onPageLoading();

  // gán sự kiện click btn Place Order
  $("#btn-place").on("click", onBtnPlaceClick);


  /*** REGION 3 - Event handlers - Vùng khai báo các hàm xử lý sự kiện */
  // Hàm xử lý sự kiện load trang
  function onPageLoading() {
    // check nếu chưa có cart trong localSto thì khởi tạo
    if (localStorage.cart == undefined) {
      localStorage.cart = "";
    }

    // thu thập sp trong cart ở localStorage
    if (localStorage.cart != "") {
      gCartArr = JSON.parse(localStorage.cart);
    }
    console.log(gCartArr);

    // hiển thị lên icon cart thông báo
    $("#number-of-products").html(`<span class="icon-shopping_cart"></span>[${gCartArr.length}]`);

    // show username to navbar if exist username's value in localStorage
    if (localStorage.username != "") {
      $("#dropdown05").html(`<span class="icon-user"></span> ${localStorage.username}</a>`);
    }

    // show Logout function if exist username's value in localStorage
    if (localStorage.username != "") {
      $("#log_out").removeClass("d-none");
    }

    // hiển thị tổng giá giỏ hàng
    var vSum = 0;
    for (let i = 0; i < gCartArr.length; i++) {
      vSum += gCartArr[i].buyPrice;
      gTotal = vSum;
    }
    $("#cart-subtotal").html("$" + gTotal + ".00");
    $("#cart-total").html("$" + gTotal + ".00");
  }

  // Hàm xử lý sự kiện click btn Place Order (thanh toán)
  function onBtnPlaceClick() {
    //B0: Khai báo biến lưu trữ dữ liệu
    // biến lưu trữ dữ liệu customer
    var vCustomerObj = {
      address: "",
      city: "",
      country: "",
      creditLimit: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      postalCode: "",
      salesRepEmployeeNumber: "",
      state: ""
    };
    // biến lưu trữ dữ liệu order
    var vOrderObj = {
      orderDate: "",
      requiredDate: "",
      status: "open"
    };

    //B1: Thu thập dữ liệu
    getDataOnForm(vCustomerObj, vOrderObj);
    console.log(vCustomerObj)
    console.log(vOrderObj)

    //B2: Validate dữ liệu
    var vIsDataValid = validateData(vCustomerObj, vOrderObj);
    if (vIsDataValid) {

      //B3: call API POST dữ liệu Customer và Order vào DB
      // POST Customer
      $.ajax({
        type: "POST",
        url: "http://localhost:8080/customer",
        data: JSON.stringify(vCustomerObj),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        async: false,
        success: function (response) {
          console.log(response)

          if (Number.isInteger(response)) { // Trường hợp sđt khách hàng đã tồn tại
            gCustomerId = response;
            alert("Existed phone number, just updated customer infomation.");

          } else { // Trường hợp là sđt mới
            gCustomerId = response[response.length - 1].id;
          }
        },
        error: function (ajaxContext) {
          alert(ajaxContext.responseText);
        }
      });

      // POST Order
      $.ajax({
        type: "POST",
        url: "http://localhost:8080/order/" + gCustomerId,
        data: JSON.stringify(vOrderObj),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        async: false,
        success: function (responseArr) {
          console.log(responseArr)
          gOrderId = responseArr[responseArr.length - 1].id;
          alert("Order is placed! ^^");
        },
        error: function (ajaxContext) {
          alert(ajaxContext.responseText);
        }
      });

      // duyệt các phần tử trong localStorage lấy ra mảng các phần tử riêng biệt
      for (let i = 0; i < gCartArr.length; i++) {
        for (let j = 0; j <= i; j++) {
          if (j == i) {
            gDistinctArr.push(gCartArr[i]);
          }
          if (gCartArr[i].id == gCartArr[j].id) {
            break;
          }
        }
      }

      // lặp đếm các phần tử cùng id và in ra danh sách các phần tử (sản phẩm) ra front-end
      for (let i = 0; i < gDistinctArr.length; i++) {
        var count = 0;
        for (let j = 0; j < gCartArr.length; j++) {
          if (gCartArr[j].id == gDistinctArr[i].id) {
            count++;
          }
        }
        // POST Order Details
        var vOrderDetailObj = {
          priceEach: gDistinctArr[i].buyPrice,
          quantityOrder: count
        }
        $.ajax({
          type: "POST",
          url: "http://localhost:8080/order-detail/" + gOrderId + "/" + gDistinctArr[i].id,
          data: JSON.stringify(vOrderDetailObj),
          dataType: "json",
          contentType: "application/json; charset=utf-8",
          success: function (response) {
            console.log(response)
            // alert("Order is placed! ^^");
          },
          error: function (ajaxContext) {
            alert(ajaxContext.responseText);
          }
        });
      }
    }
  }


  /*** REGION 4 - Common funtions - Vùng khai báo hàm dùng chung trong toàn bộ chương trình*/
  // Hàm thu thập dữ liệu trên form
  function getDataOnForm(paramCustomerObj, paramOrderObj) {
    paramCustomerObj.address = $("#inp-address").val();
    paramCustomerObj.city = $("#inp-city").val();
    paramCustomerObj.country = $("#inp-country").val();
    paramCustomerObj.firstName = $("#inp-firstname").val();
    paramCustomerObj.lastName = $("#inp-lastname").val();
    paramCustomerObj.phoneNumber = $("#inp-phone").val();
    paramCustomerObj.postalCode = $("#inp-postcode").val();

    paramOrderObj.orderDate = ($("#inp-order-date").val()).split("-").reverse().join("-");
    paramOrderObj.requiredDate = ($("#inp-required-date").val()).split("-").reverse().join("-");
  }

  // Hàm validate dữ liệu
  function validateData(paramCustomerObj, paramOrderObj) {
    if (paramCustomerObj.firstName == "") {
      alert("firstName not found!");
      return false;
    }
    if (paramCustomerObj.lastName == "") {
      alert("lastName not found!");
      return false;
    }
    if (paramCustomerObj.phoneNumber == "") {
      alert("phoneNumber not found!");
      return false;
    }
    if (paramOrderObj.orderDate == "") {
      alert("orderDate not found!");
      return false;
    }
    if (paramCustomerObj.requiredDate == "") {
      alert("requiredDate not found!");
      return false;
    }
    return true;
  }

});
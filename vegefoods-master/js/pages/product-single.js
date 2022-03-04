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
  "use strict";
  /*** REGION 1 - Global variables - Vùng khai báo biến, hằng số, tham số TOÀN CỤC */
  var gId = null;
  var gProductObj = null;
  var gCartArr = [];


  /*** REGION 2 - Vùng gán / thực thi hàm xử lý sự kiện cho các elements */
  onPageLoading();

  // gán sự kiện onchange khi select size
  $("#select-size").on("change", onChangeSelectSize);

  // gán sự kiện click vào btn Add to Cart
  $("#btn_add").on("click", onBtnAddClick);


  /*** REGION 3 - Event handlers - Vùng khai báo các hàm xử lý sự kiện */
  // Hàm xử lý sự kiện load trang
  function onPageLoading() {
    "use strict";
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

    // thu thập id trên query string
    var vUrl = new URL(window.location.href);
    gId = vUrl.searchParams.get("id");
    // call API get data by id
    $.ajax({
      type: "GET",
      url: "http://localhost:8080/product" + "/" + gId,
      async: false,
      success: function (resProduct) {
        gProductObj = resProduct;
        // load data of product into div
        var vDivProduct = $("#div-product");
        vDivProduct.html("");
        var vNewProduct = $(`	
        <div class="row my-5">
          <div class="col-lg-6 mb-5 ">
            <a href=${resProduct.image} class="image-popup"><img src=${resProduct.image} class="img-fluid"
                alt="Colorlib Template"></a>
          </div>
          <div class="col-lg-6 product-details pl-md-5 ">
            <h3 id="product-name">${resProduct.productName}</h3>
            <div class="rating d-flex">
              <p class="text-left mr-4">
                <a href="#" class="mr-2">5.0</a>
                <a href="#"><span class="ion-ios-star-outline"></span></a>
                <a href="#"><span class="ion-ios-star-outline"></span></a>
                <a href="#"><span class="ion-ios-star-outline"></span></a>
                <a href="#"><span class="ion-ios-star-outline"></span></a>
                <a href="#"><span class="ion-ios-star-outline"></span></a>
              </p>
              <p class="text-left mr-4">
                <a href="#" class="mr-2" style="color: #000;">100 <span style="color: #bbb;">Rating</span></a>
              </p>
              <p class="text-left">
                <a href="#" class="mr-2" style="color: #000;">500 <span style="color: #bbb;">Sold</span></a>
              </p>
            </div>
            <p class="price"><span id="product-price">$${resProduct.buyPrice}.00</span></p>
            <p>${resProduct.productDescription}
            </p>
            <div class="row mt-4">
              <div class="col-md-6">
                <div class="form-group d-flex">
                  <div class="select-wrap">
                    <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                    <select name="" id="select-size" class="form-control">
                      <option value="S">Small</option>
                      <option selected value="M">Medium</option>
                      <option value="L">Large</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="w-100"></div>
              <div class="input-group col-md-6 d-flex mb-3">
                <span class="input-group-btn mr-2">
                  <button type="button" class="quantity-left-minus btn" data-type="minus" data-field="">
                    <i class="ion-ios-remove"></i>
                  </button>
                </span>
                <input type="text" id="quantity" name="quantity" class="form-control input-number" value="1" min="1"
                  max="100">
                <span class="input-group-btn ml-2">
                  <button type="button" class="quantity-right-plus btn" data-type="plus" data-field="">
                    <i class="ion-ios-add"></i>
                  </button>
                </span>
              </div>
              <div class="w-100"></div>
              <div class="col-md-12">
                <p style="color: #000;">${resProduct.quantityInStock} kg available</p>
              </div>
            </div>
            <p><btn class="btn btn-black py-3 px-5" id="btn_add">Add to Cart</btn></p>
          </div>
        </div>
        `).appendTo(vDivProduct);
      }
    });
  }

  // Hàm xử lý sự kiện khi thay đổi size sản phẩm
  function onChangeSelectSize() {
    "use strict";
    var vSelectSize = $("#select-size").val();
    var vProductName = $("#product-name").html();
    console.log(vProductName)

    // call API to GET data by productName and size
    $.ajax({
      type: "GET",
      url: `http://localhost:8080/product/${vProductName}/${vSelectSize}`,
      success: function (resProduct) {
        console.log(resProduct);
        gProductObj = resProduct;
        // change product price follow size
        $("#product-price").html(`$${resProduct.buyPrice}.00`);
      }
    });
  }

  // Hàm xử lý sự kiện khi click btn Add to Cart
  function onBtnAddClick() {
    "use strict";
    // B1: thu thập dữ liệu
    var vQuantity = parseInt($("#quantity").val());
    // B2: validate 
    if (vQuantity === 0) {
      toastr.warning("Haven't selected any products yet");
      return;
    }
    // B3: xử lý dự liệu
    for (let i = 0; i < vQuantity; i++) {
      gCartArr.push(gProductObj);
    }
    localStorage.cart = JSON.stringify(gCartArr);
    // B4: xử lý hiển thị trên thanh thông báo
    $("#number-of-products").html(`<span class="icon-shopping_cart"></span>[${gCartArr.length}]`);
    window.location.href = "/shop24h-frontend/vegefoods-master/cart.html";
  }


  /*** REGION 4 - Common funtions - Vùng khai báo hàm dùng chung trong toàn bộ chương trình*/

});
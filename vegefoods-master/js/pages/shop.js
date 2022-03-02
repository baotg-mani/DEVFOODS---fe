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
  /*** REGION 1 - Global variables - Vùng khai báo biến, hằng số, tham số TOÀN CỤC */
  var gProducts = [];
  const gVEGETABLES = "Vegetables";
  const gFRUITS = "Fruits";
  const gJUICE = "Juice";
  const gDRIED = "Dried";
  const gALL = "All";
  var gProductType = gALL;

  // khai báo biến lưu trữ các product vào cart
  var gCartArr = [];

  // kiểm tra browser có hỗ trợ local storage hay không
  if (typeof (Storage) !== 'undefined') {
    //Nếu có hỗ trợ
    //Thực hiện khởi tạo localStorage cart (chữa dữ liệu giỏ hàng)
    localStorage.cart = "";

  } else {
    //Nếu không hỗ trợ
    alert('Trình duyệt của bạn không hỗ trợ Storage');
  }


  /*** REGION 2 - Vùng gán / thực thi hàm xử lý sự kiện cho các elements */
  onPageLoading();

  // gán sự kiện khi click icon page 1
  $("#page-1").on("click", onPage1Click);

  // gán sự kiện khi click icon page 2
  $("#page-2").on("click", onPage2Click);

  // gán sự kiện khi click btn All
  $("#elect-all").click(onBtnAllClick);

  // gán sự kiện khi click btn Vegetables
  $("#elect-vegetable").click(onBtnVegetClick);

  // gán sự kiện khi click btn Fruits
  $("#elect-fruit").on("click", onBtnFruitClick);

  // gán sự kiện khi click btn Juice
  $("#elect-juice").click(onBtnJuiceClick);

  // gán sự kiện khi click btn Dried
  $("#elect-dried").click(onBtnDriedClick);

  // gán sự kiện khi click btn Low to high
  $("#btn-low-to-high").on("click", onBtnLowToHighClick);

  // gán sự kiện khi click btn High to low
  $("#btn-high-to-low").on("click", onBtnHighToLowClick);

  // gán sự kiện khi click btn Filter
  $("#btn-filter").on("click", onBtnFilterClick);

  // gán sự kiện khi click icon buy-now
  $(document).on("click", ".buy-now", function () {
    onIconBuyNowClick(this);
  });


  /*** REGION 3 - Event handlers - Vùng khai báo các hàm xử lý sự kiện */
  // Hàm xử lý sự kiện load trang
  function onPageLoading() {
    // show username to navbar if exist username's value in localStorage
    if (localStorage.username != "") {
      $("#dropdown05").html(`<span class="icon-user"></span> ${localStorage.username}</a>`);
    }

    // show Logout function if exist username's value in localStorage
    if (localStorage.username != "") {
      $("#log_out").removeClass("d-none");
    }

    onPage1Click();
  }

  // Hàm load danh sách dữ liệu của page 1
  function onPage1Click() {
    "use strict";
    $("#page-2").removeClass("active");
    $("#page-1").addClass("active");
    // call restAPI get data products
    $.ajax({
      type: "GET",
      url: "http://localhost:8080/product/shop/page1",
      success: function (resProducts) {
        console.log(resProducts);
        gProducts = resProducts; // lưu mảng products vào biến toàn cục

        // load data of products into div
        var vDivProductsList = $("#products-list");
        vDivProductsList.html("");
        for (let bI = 0; bI < resProducts.length; bI++) {

          var bNewProduct = $(`
              <div class="col-md-6 col-lg-3 ">
                <div class="product">
                  <a href="/shop24h-frontend/vegefoods-master/product-single.html?id=${resProducts[bI].id}" class="img-prod" ><img class="img-fluid" src=${resProducts[bI].image} alt="Colorlib Template">
                    <div class="overlay"></div>
                  </a>
                  <div class="text py-3 pb-4 px-3 text-center">
                    <h3><a href="#">${resProducts[bI].productName}</a></h3>
                    <div class="d-flex">
                      <div class="pricing">
                        <p class="price"><span>$${resProducts[bI].buyPrice}.00</span></p>
                      </div>
                    </div>
                    <div class="bottom-area d-flex px-3">
                      <div class="m-auto d-flex">
                        <a href="#" class="add-to-cart d-flex justify-content-center align-items-center text-center">
                          <span><i class="ion-ios-menu"></i></span>
                        </a>
                        <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1" data-obj='${JSON.stringify(resProducts[bI])}'>
                          <span><i class="ion-ios-cart"></i></span>
                        </a>
                        <a href="#" class="heart d-flex justify-content-center align-items-center ">
                          <span><i class="ion-ios-heart"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `).appendTo(vDivProductsList);
        }
      }
    });
  }

  // Hàm load danh sách dữ liệu của page 2
  function onPage2Click() {
    "use strict";
    $("#page-2").addClass("active");
    $("#page-1").removeClass("active");

    if (gProductType != gALL) {
      $("#products-list").html("");
      return;

    } else {
      // call restAPI get data products
      $.ajax({
        type: "GET",
        url: "http://localhost:8080/product/shop/page2",
        success: function (resProducts) {
          console.log(resProducts);

          // load data of products into div
          var vDivProductsList = $("#products-list");
          vDivProductsList.html("");
          for (let bI = 0; bI < resProducts.length; bI++) {

            var bNewProduct = $(`
                  <div class="col-md-6 col-lg-3 ">
                    <div class="product">
                      <a href="/shop24h-frontend/vegefoods-master/product-single.html?id=${resProducts[bI].id}" class="img-prod"><img class="img-fluid" src=${resProducts[bI].image} alt="Colorlib Template">
                        <div class="overlay"></div>
                      </a>
                      <div class="text py-3 pb-4 px-3 text-center">
                        <h3><a href="#">${resProducts[bI].productName}</a></h3>
                        <div class="d-flex">
                          <div class="pricing">
                            <p class="price"><span>$${resProducts[bI].buyPrice}.00</span></p>
                          </div>
                        </div>
                        <div class="bottom-area d-flex px-3">
                          <div class="m-auto d-flex">
                            <a href="#" class="add-to-cart d-flex justify-content-center align-items-center text-center">
                              <span><i class="ion-ios-menu"></i></span>
                            </a>
                            <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1" data-obj='${JSON.stringify(resProducts[bI])}'>
                              <span><i class="ion-ios-cart"></i></span>
                            </a>
                            <a href="#" class="heart d-flex justify-content-center align-items-center ">
                              <span><i class="ion-ios-heart"></i></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                `).appendTo(vDivProductsList);
          }
        }
      });

    }

  }

  // Hàm xử lý sự kiện click btn All
  function onBtnAllClick() {
    gProductType = gALL;
    $("#elect-all a").addClass("active");
    $("#elect-vegetable a").removeClass("active");
    $("#elect-fruit a").removeClass("active");
    $("#elect-juice a").removeClass("active");
    $("#elect-dried a").removeClass("active");

    onPage1Click();
  }

  // Hàm xử lý sự kiện click btn Vegetables
  function onBtnVegetClick() {
    "use strict";
    gProductType = gVEGETABLES;
    $("#page-1").addClass("active");
    $("#page-2").removeClass("active");

    $("#elect-all a").removeClass("active");
    $("#elect-vegetable a").addClass("active");
    $("#elect-fruit a").removeClass("active");
    $("#elect-juice a").removeClass("active");
    $("#elect-dried a").removeClass("active");

    // call API get data of Vegetables
    $.ajax({
      type: "GET",
      url: "http://localhost:8080/product/vegetables",
      success: function (resProducts) {
        console.log(resProducts)
        gProducts = resProducts; // lưu mảng products vào biến toàn cục
        var vDivProductsList = $("#products-list");
        // clear dato on div
        vDivProductsList.html("");

        // load data of products into div
        for (let bI = 0; bI < resProducts.length; bI++) {
          var bNewProduct = $(`
            <div class="col-md-6 col-lg-3 ">
              <div class="product">
                <a href="/shop24h-frontend/vegefoods-master/product-single.html?id=${resProducts[bI].id}" class="img-prod" ><img class="img-fluid" src=${resProducts[bI].image} alt="Colorlib Template">
                  <div class="overlay"></div>
                </a>
                <div class="text py-3 pb-4 px-3 text-center">
                  <h3><a href="#">${resProducts[bI].productName}</a></h3>
                  <div class="d-flex">
                    <div class="pricing">
                      <p class="price"><span>$${resProducts[bI].buyPrice}.00</span></p>
                    </div>
                  </div>
                  <div class="bottom-area d-flex px-3">
                    <div class="m-auto d-flex">
                      <a href="#" class="add-to-cart d-flex justify-content-center align-items-center text-center">
                        <span><i class="ion-ios-menu"></i></span>
                      </a>
                      <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1" data-obj='${JSON.stringify(resProducts[bI])}'>
                        <span><i class="ion-ios-cart"></i></span>
                      </a>
                      <a href="#" class="heart d-flex justify-content-center align-items-center ">
                        <span><i class="ion-ios-heart"></i></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `).appendTo(vDivProductsList);
        }
        // resetData();
      }
    });
  }

  // Hàm xử lý sự kiện click btn Fruits
  function onBtnFruitClick() {
    "use strict";
    gProductType = gFRUITS;
    $("#page-1").addClass("active");
    $("#page-2").removeClass("active");

    $("#elect-fruit a").addClass("active");
    $("#elect-vegetable a").removeClass("active");
    $("#elect-all a").removeClass("active");
    $("#elect-juice a").removeClass("active");
    $("#elect-dried a").removeClass("active");

    // call API get data of Vegetables
    $.ajax({
      type: "GET",
      url: "http://localhost:8080/product/fruits",
      success: function (resProducts) {
        gProducts = resProducts;// lưu mảng products vào biến toàn cục

        var vDivProductsList = $("#products-list");
        // clear dato on div
        vDivProductsList.html("");

        // load data of products into div
        for (let bI = 0; bI < resProducts.length; bI++) {
          var bNewProduct = $(`
            <div class="col-md-6 col-lg-3 ">
              <div class="product">
                <a href="/shop24h-frontend/vegefoods-master/product-single.html?id=${resProducts[bI].id}" class="img-prod" ><img class="img-fluid" src=${resProducts[bI].image} alt="Colorlib Template">
                  <div class="overlay"></div>
                </a>
                <div class="text py-3 pb-4 px-3 text-center">
                  <h3><a href="#">${resProducts[bI].productName}</a></h3>
                  <div class="d-flex">
                    <div class="pricing">
                      <p class="price"><span>$${resProducts[bI].buyPrice}.00</span></p>
                    </div>
                  </div>
                  <div class="bottom-area d-flex px-3">
                    <div class="m-auto d-flex">
                      <a href="#" class="add-to-cart d-flex justify-content-center align-items-center text-center">
                        <span><i class="ion-ios-menu"></i></span>
                      </a>
                      <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1" data-obj='${JSON.stringify(resProducts[bI])}'>
                        <span><i class="ion-ios-cart"></i></span>
                      </a>
                      <a href="#" class="heart d-flex justify-content-center align-items-center ">
                        <span><i class="ion-ios-heart"></i></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `).appendTo(vDivProductsList);
        }
        // resetData();
      }
    });
  }

  // Hàm xử lý sự kiện click btn Juice
  function onBtnJuiceClick() {
    "use strict";
    gProductType = gJUICE;
    $("#page-1").addClass("active");
    $("#page-2").removeClass("active");

    $("#elect-juice a").addClass("active");
    $("#elect-vegetable a").removeClass("active");
    $("#elect-fruit a").removeClass("active");
    $("#elect-all a").removeClass("active");
    $("#elect-dried a").removeClass("active");

    // call API get data of Vegetables
    $.ajax({
      type: "GET",
      url: "http://localhost:8080/product/juice",
      success: function (resProducts) {
        gProducts = resProducts;// lưu mảng products vào biến toàn cục

        var vDivProductsList = $("#products-list");
        // clear dato on div
        vDivProductsList.html("");

        // load data of products into div
        for (let bI = 0; bI < resProducts.length; bI++) {
          var bNewProduct = $(`
            <div class="col-md-6 col-lg-3 ">
              <div class="product">
                <a href="/shop24h-frontend/vegefoods-master/product-single.html?id=${resProducts[bI].id}" class="img-prod" ><img class="img-fluid" src=${resProducts[bI].image} alt="Colorlib Template">
                  <div class="overlay"></div>
                </a>
                <div class="text py-3 pb-4 px-3 text-center">
                  <h3><a href="#">${resProducts[bI].productName}</a></h3>
                  <div class="d-flex">
                    <div class="pricing">
                      <p class="price"><span>$${resProducts[bI].buyPrice}.00</span></p>
                    </div>
                  </div>
                  <div class="bottom-area d-flex px-3">
                    <div class="m-auto d-flex">
                      <a href="#" class="add-to-cart d-flex justify-content-center align-items-center text-center">
                        <span><i class="ion-ios-menu"></i></span>
                      </a>
                      <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1" data-obj='${JSON.stringify(resProducts[bI])}'>
                        <span><i class="ion-ios-cart"></i></span>
                      </a>
                      <a href="#" class="heart d-flex justify-content-center align-items-center ">
                        <span><i class="ion-ios-heart"></i></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `).appendTo(vDivProductsList);
        }
        // resetData();
      }
    });
  }

  // Hàm xử lý sự kiện click btn Dried
  function onBtnDriedClick() {
    "use strict";
    gProductType = gDRIED;

    $("#page-1").addClass("active");
    $("#page-2").removeClass("active");

    $("#elect-dried a").addClass("active");
    $("#elect-vegetable a").removeClass("active");
    $("#elect-fruit a").removeClass("active");
    $("#elect-juice a").removeClass("active");
    $("#elect-all a").removeClass("active");

    // call API get data of Vegetables
    $.ajax({
      type: "GET",
      url: "http://localhost:8080/product/dried",
      success: function (resProducts) {
        gProducts = resProducts;// lưu mảng products vào biến toàn cục

        var vDivProductsList = $("#products-list");
        // clear dato on div
        vDivProductsList.html("");

        // load data of products into div
        for (let bI = 0; bI < resProducts.length; bI++) {
          var bNewProduct = $(`
            <div class="col-md-6 col-lg-3 ">
              <div class="product">
                <a href="/shop24h-frontend/vegefoods-master/product-single.html?id=${resProducts[bI].id}"><img class="img-fluid" src=${resProducts[bI].image} alt="Colorlib Template">
                <div cl" class="img-prod" data-id="ass="overlay"></div>
                </a>
                <div class="text py-3 pb-4 px-3 text-center">
                  <h3><a href="#">${resProducts[bI].productName}</a></h3>
                  <div class="d-flex">
                    <div class="pricing">
                      <p class="price"><span>$${resProducts[bI].buyPrice}.00</span></p>
                    </div>
                  </div>
                  <div class="bottom-area d-flex px-3">
                    <div class="m-auto d-flex">
                      <a href="#" class="add-to-cart d-flex justify-content-center align-items-center text-center">
                        <span><i class="ion-ios-menu"></i></span>
                      </a>
                      <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1" data-obj='${JSON.stringify(resProducts[bI])}'>
                        <span><i class="ion-ios-cart"></i></span>
                      </a>
                      <a href="#" class="heart d-flex justify-content-center align-items-center ">
                        <span><i class="ion-ios-heart"></i></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `).appendTo(vDivProductsList);
        }
        // resetData();
      }
    });
  }

  // Hàm xử lý sự kiện click btn Low to high theo Price
  function onBtnLowToHighClick() {
    // sort low to high by price
    var vLowToHighArr = gProducts.sort((a, b) => a.buyPrice - b.buyPrice);
    var vDivProductsList = $("#products-list");
    // clear dato on div
    vDivProductsList.html("");

    // load data of products into div
    for (let bI = 0; bI < vLowToHighArr.length; bI++) {
      var bNewProduct = $(`
            <div class="col-md-6 col-lg-3 ">
              <div class="product">
                <a href="/shop24h-frontend/vegefoods-master/product-single.html?id=${vLowToHighArr[bI].id}" class="img-prod" ><img class="img-fluid" src=${vLowToHighArr[bI].image} alt="Colorlib Template">
                  <div class="overlay"></div>
                </a>
                <div class="text py-3 pb-4 px-3 text-center">
                  <h3><a href="#">${vLowToHighArr[bI].productName}</a></h3>
                  <div class="d-flex">
                    <div class="pricing">
                      <p class="price"><span>$${vLowToHighArr[bI].buyPrice}.00</span></p>
                    </div>
                  </div>
                  <div class="bottom-area d-flex px-3">
                    <div class="m-auto d-flex">
                      <a href="#" class="add-to-cart d-flex justify-content-center align-items-center text-center">
                        <span><i class="ion-ios-menu"></i></span>
                      </a>
                      <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1" data-obj='${JSON.stringify(vLowToHighArr[bI])}'>
                        <span><i class="ion-ios-cart"></i></span>
                      </a>
                      <a href="#" class="heart d-flex justify-content-center align-items-center ">
                        <span><i class="ion-ios-heart"></i></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `).appendTo(vDivProductsList);
    }
  }

  // Hàm xử lý sự kiện click btn High to low theo Price
  function onBtnHighToLowClick() {
    // sort high to low by price
    var vHighToLowArr = gProducts.sort((a, b) => b.buyPrice - a.buyPrice);
    var vDivProductsList = $("#products-list");
    // clear dato on div
    vDivProductsList.html("");

    // load data of products into div
    for (let bI = 0; bI < vHighToLowArr.length; bI++) {
      var bNewProduct = $(`
            <div class="col-md-6 col-lg-3 ">
              <div class="product">
                <a href="/shop24h-frontend/vegefoods-master/product-single.html?id=${vHighToLowArr[bI].id}" class="img-prod" ><img class="img-fluid" src=${vHighToLowArr[bI].image} alt="Colorlib Template">
                  <div class="overlay"></div>
                </a>
                <div class="text py-3 pb-4 px-3 text-center">
                  <h3><a href="#">${vHighToLowArr[bI].productName}</a></h3>
                  <div class="d-flex">
                    <div class="pricing">
                      <p class="price"><span>$${vHighToLowArr[bI].buyPrice}.00</span></p>
                    </div>
                  </div>
                  <div class="bottom-area d-flex px-3">
                    <div class="m-auto d-flex">
                      <a href="#" class="add-to-cart d-flex justify-content-center align-items-center text-center">
                        <span><i class="ion-ios-menu"></i></span>
                      </a>
                      <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1" data-obj='${JSON.stringify(vHighToLowArr[bI])}'>
                        <span><i class="ion-ios-cart"></i></span>
                      </a>
                      <a href="#" class="heart d-flex justify-content-center align-items-center ">
                        <span><i class="ion-ios-heart"></i></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `).appendTo(vDivProductsList);
    }
  }

  // Hàm xử lý sự kiện click btn Filter 
  function onBtnFilterClick() {
    // thu thập dữ liệu input
    var vInput = $("#inp-product-name").val().trim();
    if (vInput === "") {
      alert("chưa điền thông tin");
      return;
    }
    var vFilterResult = [];
    vFilterResult = gProducts.filter(function (e) {
      return (e.productName.toLowerCase().includes(vInput.toLowerCase()) || vInput === "");
    });

    var vDivProductsList = $("#products-list");
    // clear dato on div
    vDivProductsList.html("");

    // load data of products into div
    for (let bI = 0; bI < vFilterResult.length; bI++) {
      var bNewProduct = $(`
            <div class="col-md-6 col-lg-3 ">
              <div class="product">
                <a href="/shop24h-frontend/vegefoods-master/product-single.html?id=${vFilterResult[bI].id}" class="img-prod" ><img class="img-fluid" src=${vFilterResult[bI].image} alt="Colorlib Template">
                  <div class="overlay"></div>
                </a>
                <div class="text py-3 pb-4 px-3 text-center">
                  <h3><a href="#">${vFilterResult[bI].productName}</a></h3>
                  <div class="d-flex">
                    <div class="pricing">
                      <p class="price"><span>$${vFilterResult[bI].buyPrice}.00</span></p>
                    </div>
                  </div>
                  <div class="bottom-area d-flex px-3">
                    <div class="m-auto d-flex">
                      <a href="#" class="add-to-cart d-flex justify-content-center align-items-center text-center">
                        <span><i class="ion-ios-menu"></i></span>
                      </a>
                      <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1" data-obj='${JSON.stringify(vFilterResult[bI])}'>
                        <span><i class="ion-ios-cart"></i></span>
                      </a>
                      <a href="#" class="heart d-flex justify-content-center align-items-center ">
                        <span><i class="ion-ios-heart"></i></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `).appendTo(vDivProductsList);
    }
  }

  // Hàm xử lý sự kiện click icon buy-now
  function onIconBuyNowClick(paramIconBuyNow) {
    // thu thập dữ liệu obj của product được chọn
    var vProductObj = JSON.parse(paramIconBuyNow.dataset.obj);
    // lưu vào biến mảng giỏ hàng
    gCartArr.push(vProductObj);
    // convert sang json string lưu vào localStorage
    localStorage.cart = JSON.stringify(gCartArr);
    // xử lý hiển thị lên icon trên thanh thông báo
    $("#number-of-products").html(`<span class="icon-shopping_cart"></span>[${gCartArr.length}]`);
  }


  /*** REGION 4 - Common functions - Vùng khai báo hàm dùng chung trong toàn bộ chương trình*/
  // Hàm reset dữ liệu
  function resetData() {
    gProducts = [];
  }

});

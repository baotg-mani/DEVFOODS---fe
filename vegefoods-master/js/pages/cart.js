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
  /*** REGION 1 - Global variables - V??ng khai b??o bi???n, h???ng s???, tham s??? TO??N C???C */
  var gCartArr = [];
  var gTotal = 0;
  var gDistinctArr = [];


  /*** REGION 2 - V??ng g??n / th???c thi h??m x??? l?? s??? ki???n cho c??c elements */
  // th???c thi s??? ki???n load trang
  onPageLoading();

  // g??n s??? ki???n click btn plus c???a m???i s???n ph???m
  $(document).on("click", ".btn_plus", function (e) {
    // Stop acting like a button
    e.preventDefault();
    onBtnPlusClick(this)
  });

  // g??n s??? ki???n click btn minus c???a m???i s???n ph???m
  $(document).on("click", ".btn_minus", function (e) {
    // Stop acting like a button
    e.preventDefault();
    onBtnMinusClick(this)
  });



  /*** REGION 3 - Event handlers - V??ng khai b??o c??c h??m x??? l?? s??? ki???n */

  // H??m x??? l?? s??? ki???n load trang
  function onPageLoading() {
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

    // show username to navbar if exist username's value in localStorage
    if (localStorage.username != "") {
      $("#dropdown05").html(`<span class="icon-user"></span> ${localStorage.username}</a>`);
    }

    // show Logout function if exist username's value in localStorage
    if (localStorage.username != "") {
      $("#log_out").removeClass("d-none");
    }

    // load c??c danh m???c sp trong gi??? h??ng ra danh s??ch
    // l???y ra m???ng c??c ph???n t??? ri??ng bi???t (gDistinctArr)
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
    console.log(gDistinctArr);

    // l???p ?????M c??c ph???n t??? c??ng id v?? in ra danh s??ch c??c ph???n t??? (s???n ph???m) ra front-end
    for (let i = 0; i < gDistinctArr.length; i++) {
      var count = 0;
      for (let j = 0; j < gCartArr.length; j++) {
        if (gCartArr[j].id == gDistinctArr[i].id) {
          count++;
        }
      }
      var vNewProduct = $(`
        <tr class="text-center">
          <td class="product-remove"><a href="#"><span class="ion-ios-close"></span></a></td>

          <td class="image-prod">
            <div class="img" style="background-image:url(${gDistinctArr[i].image});"></div>
          </td>

          <td class="product-name">
            <h3>${gDistinctArr[i].productName}</h3>
            <p>Far far away, behind the word mountains, far from the countries</p>
          </td>

          <td class="">
            ${gDistinctArr[i].productSize}
          </td>

          <td class="price">${gDistinctArr[i].buyPrice}</td>

          <td class="quantity">
            <div class="input-group mb-3 d-flex">
              <span class="input-group-btn mr-2">
                <button type="button" class="quantity-left-minus btn rounded-0 shadow-none btn_minus" data-type="minus"
                  data-field="" data-id=${gDistinctArr[i].id}>
                  <i class="ion-ios-remove"></i>
                </button>
              </span>
              <input type="text" name="quantity" class="quantity form-control input-number" value=${count}
                min="1" max="100">
              <span class="input-group-btn ml-2">
                <button type="button" class="quantity-right-plus btn rounded-0 shadow-none btn_plus" data-type="plus"
                  data-field="" data-id=${gDistinctArr[i].id}>
                  <i class="ion-ios-add"></i>
                </button>
              </span>
            </div>
          </td>

          <td class="total">${gDistinctArr[i].buyPrice * count}</td>
        </tr>
      `).appendTo($("#tbody-cart"));
    }

    // hi???n th??? t???ng gi?? gi??? h??ng
    var vSum = 0;
    for (let i = 0; i < gCartArr.length; i++) {
      vSum += gCartArr[i].buyPrice;
      gTotal = vSum;
    }
    $("#cart-subtotal").html("$" + gTotal + ".00");
    $("#cart-total").html("$" + gTotal + ".00");
  }


  // H??m x??? l?? s??? ki???n click .btn_plus
  function onBtnPlusClick(paramPlus) {
    // update quantity
    var vInpQuantityElement = $(paramPlus).parents("div").children("input");
    vInpQuantityElement.val(parseInt(vInpQuantityElement.val()) + 1);

    // update total price of product
    var vTotalProduct = $(paramPlus).parents("tr").children("td:nth-child(7)");  //maybe query like this
    var vPriceProduct = $(paramPlus).closest("tr").find("td:nth-child(5)");      //or like this
    vTotalProduct.text(parseInt(vTotalProduct.text()) + parseInt(vPriceProduct.text()));

    // update total cart
    gTotal += parseInt(vPriceProduct.text());
    $("#cart-subtotal").html("$" + gTotal + ".00");
    $("#cart-total").html("$" + gTotal + ".00");

    // update cart in localStorage
    var vProduct = gDistinctArr.filter(e => e.id == paramPlus.dataset.id);
    gCartArr.push(vProduct.find(e => vProduct.indexOf(e) == 0));                 // d??ng .find ????? chuy???n m???ng 1 ph???n t??? v??? 1 obj
    localStorage.cart = JSON.stringify(gCartArr);

    // update l??n icon th??ng b??o
    $("#number-of-products").html(`<span class="icon-shopping_cart"></span>[${gCartArr.length}]`);

  }


  // H??m x??? l?? s??? ki???n click .btn_minus
  function onBtnMinusClick(paramMinus) {
    // update quantity
    var vInpQuantityElement = $(paramMinus).parents("div").children("input");
    if (vInpQuantityElement.val() > 0) {
      vInpQuantityElement.val(parseInt(vInpQuantityElement.val()) - 1);
    }

    // update total price of product
    var vTotalProduct = $(paramMinus).parents("tr").children("td:nth-child(7)");  //maybe query like this
    var vPriceProduct = $(paramMinus).closest("tr").find("td:nth-child(5)");      //or like this

    // update total cart
    if (gTotal > 0 && parseInt(vTotalProduct.text()) > 0) {
      gTotal -= parseInt(vPriceProduct.text());
      $("#cart-subtotal").html("$" + gTotal + ".00");
      $("#cart-total").html("$" + gTotal + ".00");

      // update cart in localStorage
      var vProduct = gDistinctArr.filter(e => e.id == paramMinus.dataset.id);     // return arr have 1 element
      var vProductObj = vProduct.find(e => vProduct.indexOf(e) == 0);             // convert arr 1 e to obj
      gCartArr.splice(gCartArr.indexOf(vProductObj), 1);
      console.log(gCartArr)
      localStorage.cart = JSON.stringify(gCartArr);

      // update l??n icon th??ng b??o
      $("#number-of-products").html(`<span class="icon-shopping_cart"></span>[${gCartArr.length}]`);
    }
    if (parseInt(vTotalProduct.text()) > 0) {
      vTotalProduct.text(parseInt(vTotalProduct.text()) - parseInt(vPriceProduct.text()));
    }

  }



  /*** REGION 4 - Common funtions - V??ng khai b??o h??m d??ng chung trong to??n b??? ch????ng tr??nh*/


});
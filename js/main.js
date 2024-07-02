window.onload = function() {

  if ($('.swiper7').length !== 0) {
    var swiper7 = new Swiper(".swiper7", {
      navigation: {
        nextEl: ".swiper7 .swiper_next",
        prevEl: ".swiper7 .swiper_prev",
      },
      spaceBetween: 24,
      slidesPerView: 'auto',
    });
  }

  if ($('.swiper8').length !== 0) {

    const breakpoint = screen.width;
    

    const breakpoinChekker = function(){
      if(breakpoint <= 1199){
        if(swiper !== undefined) swiper.destroy(true, true);
        return;
      }
      else if(breakpoint > 992){
        return enableSwiper();
      }
    };

    const enableSwiper = function(){
      var swiper8 = new Swiper(".swiper8", {
        navigation: {
          nextEl: ".swiper_navigation .swiper_next",
          prevEl: ".swiper_navigation .swiper_prev",
        },
        spaceBetween: 16,
        slidesPerView: 'auto',
      });
    }
    breakpoinChekker()
    
  }

  if ($('.swiper9').length !== 0) {
    var swiper9 = new Swiper(".swiper9", {
      navigation: {
        nextEl: ".swiper9-navigation .swiper_next",
        prevEl: ".swiper9-navigation .swiper_prev",
      },
      breakpoints: {
        500: {
          slidesPerView: 'auto',
          spaceBetween: 8,
        },
        5000: {
          spaceBetween: 12,
          slidesPerView: 'auto',
        },
      },
    })
  }
  if ($('.swiper10').length !== 0) {
    var swiper10 = new Swiper(".swiper10", {
      navigation: {
        nextEl: ".swiper10-navigation .swiper_next",
        prevEl: ".swiper10-navigation .swiper_prev",
      },
      breakpoints: {
        500: {
          slidesPerView: 'auto',
          spaceBetween: 8,
        },
        5000: {
          spaceBetween: 12,
          slidesPerView: 'auto',
        },
      },
    })
  }

  if ($('.swiper11').length !== 0) {
    var swiper11 = new Swiper(".swiper11", {

      spaceBetween: 12,
      slidesPerView: 4.8,
    })
  }

  if ($('.block_bg').length !== 0) {
    height = $('.block_bg').outerHeight()
    $('.block_bg').next().css('margin-top', height + 'px')
  }

  function resetIntlTelInput() {
    if (typeof intlTelInputUtils !== 'undefined') { // utils are lazy loaded, so must check
      var currentText = telInput.intlTelInput("getNumber", intlTelInputUtils.numberFormat.E164);
      if (typeof currentText === 'string') { // sometimes the currentText is an object :)
        telInput.intlTelInput('setNumber', currentText); // will autoformat because of formatOnDisplay=true
      }
    }
  }
  if ($('.show_password').length !== 0) {
    $('.show_password').click(function() {
      $(this).toggleClass('active')
      $(this).siblings('img').toggleClass('active')
      x = $(this).siblings('.password')

      if (x.attr('type') === "password") {
        x.attr('type', "text");
      } else {
        x.attr('type', "password");
      }
    })

    $("input[name='phone_number']").inputmask({
      mask: '999 999-99-99',
    });

    $('#reg4').inputmask('email');
  }

  if ($('.header_row .search_wrap').length !== 0) {

    if (screen.width < 1400) {
      $('.search_wrap .search').click(function() {
        $('body').addClass('search_active')
      })
    }

    $('.search_wrap img').click(function() {
      $('.search').removeClass('typing')
      $('.search').val('')
    })

  }

  if ($('.categories_row')) {
    $('.categories_row a').click(function() {
      $(this).siblings().removeClass('active')
      $(this).addClass('active')
    })
  }

  if ($('.menus')) {
    $('.menus a').click(function() {
      $(this).parent().siblings().children().removeClass('active')
      $(this).addClass('active')
    })
  }

  $(".search").on("keyup", function() {
    $('body').removeClass('filter_open')
    $(this).addClass('typing')
    if ($('.search').val() == 0) {
      $(this).removeClass('typing')
    }
    console.log(1)
    var value = $(this).val().toLowerCase();
    $(".search_item .search_name").filter(function() {
      $(this).parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  $(".search_wrap img").click(function() {
    $(this).addClass('typing')
    if ($('.search').val() == 0) {
      $(this).removeClass('typing')
      $('body').removeClass('search_active')
    }
    var value = $(this).val().toLowerCase();
    $(".search_item .search_name").filter(function() {
      $(this).parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  if ($('.search_item')) {
    $('.search_item .remove_item').click(function() {
      $(this).parent().remove()
    })
  }


  if ($('.tab_items').length !== 0) {

    if (screen.width < 500) {

      $('.modul .modul2').fadeOut(0)
      $('.modul .modul1').fadeIn(0)
      $('.tab_items div').click(function() {

        id = '#' + $(this).attr('id')
        $(this).siblings().removeClass('active')
        $(this).addClass('active')

        $('.modul .change_item').fadeOut(100)
        active = $('.modul').find(id).fadeIn(100)
      })
    }

    $('.modal_header svg').click(function() {
      $('body').removeClass('shadow')
    })

  }

  if ($('.show_more')) {
    $('.show_more').click(function() {
      $(this).toggleClass('rotate')
      $(this).prev().toggleClass('hidde')
    })
  }

  if ($('.video_player')) {
    $('.video_player .play_btn').click(function() {
      $(this).parent().addClass('active')
      $(this).siblings('video').get(0).play();
    })
  }

  if ($('.input_stars')) {
    $('.input_stars div').click(function() {
      $(this).toggleClass('checked')

      $(this).nextAll().removeClass('checked')
      $(this).nextAll().find('input').prop('checked', false);

      $(this).prevAll().addClass('checked')
      $(this).prevAll().find('input').prop('checked', true);
    })
  }

  if ($('.wrap_textarea')) {
    $('.wrap_textarea textarea').keyup(function() {
      var str = $(this).val();

      num = 500 - str.length
      $('.wrap_textarea p').html(num)
      if (str.length > 500) {
        $('.wrap_textarea textarea').val(str);
      }
    })
  }

  if ($('.search_results')) {

    $('.search_results').fadeOut(0)
    $(".search").on("keyup", function() {

      $('.course_main').fadeOut(300)
      $('.search_results').fadeIn(300)
      var value = $(this).val().toLowerCase();
      $(".result_item .title").filter(function() {
        console.log(1)
        $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });

    $(".search_wrap img").click(function() {
      $(this).removeClass('typing')
      $('.search').val('')
      $('.search').removeClass('typing')

      $('.search_results').fadeOut(0)
      $('.course_main').fadeIn(300)
    })

  }

  if ($('.user_form').length !== 0) {
    var preview = $('.user_image input')

    preview.change(function() {
      const [file] = this.files
      if (file) {
        $(this).siblings('img').attr('src', URL.createObjectURL(file))
      }
    })

    $("#phone").intlTelInput({
      initialCountry: "auto",
      separateDialCode: false,
      formatOnDisplay: true,
      nationalMode: false,
      allowDropdown: false,
      geoIpLookup: function(callback) {
        $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
          var countryCode = (resp && resp.country) ? resp.country : "";
          callback(countryCode);
        });
      },
      utilsScript: "../../build/js/utils.js?1562189064761",
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.0.3/js/utils.js",
      preferredCountries: [],
    });

    function resetIntlTelInput() {
      if (typeof intlTelInputUtils !== 'undefined') { // utils are lazy loaded, so must check
        var currentText = telInput.intlTelInput("getNumber", intlTelInputUtils.numberFormat.E164);
        if (typeof currentText === 'string') { // sometimes the currentText is an object :)
          telInput.intlTelInput('setNumber', currentText); // will autoformat because of formatOnDisplay=true
        }
      }
    }

  }

  if ($('.lessons')) {
    $('.lessons .block_title').click(function() {
      $(this).toggleClass('rotate')
      $(this).siblings().slideToggle(300)
    })
  }

  if ($('.single').length !== 0) {

    $('.play_center .play_btn').click(function() {
      $('.single .player').addClass('active')
      $('.single .player video').get(0).play()
    })

    if ($(screen.width) < 500) {
      $('.tab_block .change:not(:first)').slideToggle(0)
    } else {
      $('.tab_block .change:not(:nth-child(2))').slideToggle(0)
    }

    $('.tab_items div').click(function() {
      $(this).addClass('active')
      $(this).siblings().removeClass('active')
      id = "#" + $(this).attr('id')
      $(".tab_block .change").slideUp(0)
      $(".tab_block").find(id).slideDown(300)
    })

    $('.full').click(function() {
      $('.single').toggleClass('full_screen')
      $(this).toggleClass('rotate')
    })
  }

  if ($('.chats').length !== 0) {
    $('.chats .block_title a').click(function() {

      if (screen.width < 500) {
        $('body').addClass('shadow')
        $('.chat_modal').addClass('active')
      }

    })

    $('.chat_modal .cancel_btn').click(function() {
      $('body').removeClass('shadow')
      $('.chat_modal').removeClass('active')
    })
  }

  if ($('.new_chat').length !== 0) {

    $('.chats_for_search').hide()

    $(".new_chat .search").on("keyup", function() {

      $(this).addClass('typing')

      $('.new_chat_main').fadeOut(0)
      $('.chats_for_search').fadeIn(300)

      var value = $(this).val().toLowerCase();

      $(".chats_for_search .chat_item .chat_title").filter(function() {
        $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });

    });

    $('.search_wrap img').click(function() {

      $(this).removeClass('typing')

      $('.search').val('')
      $('.search').removeClass('typing')

      $('.new_chat_main').fadeIn(300)
      $('.chats_for_search').fadeOut(0)
    })
  }

  if ($('.messages').length !== 0) {

    $('.open_action').click(function() {
      $('.room_actions').addClass('show')
    })

    $('main').click(function() {
      $('.room_actions').removeClass('show')
    })

    $('.message .message_action img').click(function() {
      $('.for_click').addClass('active')
      $(this).parent().parent().addClass('edit')
    })

    $('.for_click').click(function() {
      $(this).removeClass('active')
      $('.message').removeClass('edit')
    })
  }

  if ($('.story_bottom').length !== 0) {
    $('.show_all_desc').click(function() {
      $(this).siblings('.story_desc').toggleClass('hide')
    })

    $('.story_actions svg:first-child').click(function() {
      $(this).toggleClass('active')
    })

    $('.story_actions .show_comments').click(function() {
      $('.story_comments').toggleClass('show')
      $('body').addClass('shadow')
    })

    $('.comments_header img').click(function() {
      $('.story_comments').toggleClass('show')
      $('body').removeClass('shadow')
    })
  }

  if ($('.swiper1').length !== 0) {
    var swiper1 = new Swiper('.swiper1', {
      navigation: {
        nextEl: ".swiper1 .swiper_next",
        prevEl: ".swiper1 .swiper_prev",
      },
      breakpoints: {
        500: {
          spaceBetween: 16,
          slidesPerView: 'auto',
        },
        5000: {
          spaceBetween: 12,
          slidesPerView: 'auto',
        }
      }
    })
  }

  if ($('.swiper2').length !== 0) {
    var swiper2 = new Swiper('.swiper2', {
      slidesPerColumn: 2,
      navigation: {
        nextEl: ".swiper2 .swiper_next",
        prevEl: ".swiper2 .swiper_prev",
      },
      breakpoints: {
        500: {
          spaceBetween: 16,
          slidesPerView: 'auto',
        },
        5000: {
          spaceBetween: 12,
          slidesPerView: 'auto',
        }
      }
    })
  }

  if ($('.swiper3').length !== 0) {
    var swiper3 = new Swiper('.swiper3', {
      slidesPerColumn: 2,
      navigation: {
        nextEl: ".swiper3 .swiper_next",
        prevEl: ".swiper3 .swiper_prev",
      },
      breakpoints: {
        500: {
          spaceBetween: 16,
          slidesPerView: 'auto',
        },
        5000: {
          spaceBetween: 12,
          slidesPerView: 'auto',
        }
      }
    })
  }

  if ($('.swiper4').length !== 0) {
    var swiper4 = new Swiper('.swiper4', {
      slidesPerColumn: 2,
      navigation: {
        nextEl: ".swiper4 .swiper_next",
        prevEl: ".swiper4 .swiper_prev",
      },
      breakpoints: {
        500: {
          spaceBetween: 16,
          slidesPerView: 'auto',
        },
        5000: {
          spaceBetween: 12,
          slidesPerView: 'auto',
        }
      }
    })
  }
  if ($('.swiper5').length !== 0) {
    var swiper5 = new Swiper('.swiper5', {

      navigation: {
        nextEl: ".swiper5 .swiper_next",
        prevEl: ".swiper5 .swiper_prev",
      },

      breakpoints: {
        500: {
          spaceBetween: 16,
          slidesPerView: 1.07,
        },
        5000: {
          spaceBetween: 12,
          slidesPerView: 'auto',
        }
      }
    })
  }

  if ($('.swiper6').length !== 0) {

    var swiper6 = new Swiper('.swiper6', {

      navigation: {
        nextEl: ".swiper11-navigation .swiper_next",
        prevEl: ".swiper11-navigation .swiper_prev",
      },

      breakpoints: {
        500: {
          spaceBetween: 16,
          slidesPerView: 1.07,
        },
        5000: {
          spaceBetween: 20,
          slidesPerView: 'auto',
        }
      }
    })
  }

  if ($('#modal1').length !== 0) {
    const myModal1 = document.getElementById('modal1')
    const myInput1 = document.getElementsByClassName('.link_profile')

    myModal1.addEventListener('shown.bs.modal', () => {
      myInput1.focus()
    })
  }
  if ($('#modal2').length !== 0) {
    const myModal2 = document.getElementById('modal2')
    const myInput2 = document.getElementsByClassName('.open_modal2')

    myModal2.addEventListener('shown.bs.modal', () => {
      myInput2.focus()
    })
  }
  if ($('#modal3').length !== 0) {
    const myModal3 = document.getElementById('modal3')
    const myInput3 = document.getElementsByClassName('.open_modal3')

    myModal3.addEventListener('shown.bs.modal', () => {
      myInput3.focus()
    })
  }
  if ($('#modal4').length !== 0) {
    const myModal4 = document.getElementById('modal4')
    const myInput4 = document.getElementsByClassName('.open_modal4')

    myModal4.addEventListener('shown.bs.modal', () => {
      myInput4.focus()
    })
  }
  if ($('#modal5').length !== 0) {
    const myModal5 = document.getElementById('modal5')
    const myInput5 = document.getElementsByClassName('open_modal5')

    myModal5.addEventListener('shown.bs.modal', () => {
      myInput5.focus()
    })
  }
  if ($('#modal6').length !== 0) {
    const myModal6 = document.getElementById('modal6')
    const myInput6 = document.getElementsByClassName('open_modal6')

    myModal6.addEventListener('shown.bs.modal', () => {
      myInput6.focus()
    })
  }
  if ($('#modal7').length !== 0) {
    const myModal7 = document.getElementById('modal7')
    const myInput7 = document.getElementsByClassName('open_modal7')

    myModal7.addEventListener('shown.bs.modal', () => {
      myInput7.focus()
    })
  }
  if ($('#modal8').length !== 0) {
    const myModal8 = document.getElementById('modal8')
    const myInput8 = document.getElementsByClassName('open_modal8')

    myModal8.addEventListener('shown.bs.modal', () => {
      myInput8.focus()
    })
  }
  if ($('#modal9').length !== 0) {
    const myModal9 = document.getElementById('modal9')
    const myInput9 = document.getElementsByClassName('open_modal9')

    myModal9.addEventListener('shown.bs.modal', () => {
      myInput9.focus()
    })
  }
  if ($('#modal10').length !== 0) {
    const myModal10 = document.getElementById('modal10')
    const myInput10 = document.getElementsByClassName('open_modal10')

    myModal10.addEventListener('shown.bs.modal', () => {
      myInput10.focus()
    })
  }
  if ($('#modal11').length !== 0) {
    const myModal11 = document.getElementById('modal11')
    const myInput11 = document.getElementsByClassName('open_modal11')

    myModal11.addEventListener('shown.bs.modal', () => {
      myInput11.focus()
    })
  }
  if ($('#modal12').length !== 0) {
    const myModal12 = document.getElementById('modal12')
    const myInput12 = document.getElementsByClassName('open_header')

    myModal12.addEventListener('shown.bs.modal', () => {
      myInput12.focus()
    })
  }

  if ($('.profile_bottom').length !== 0) {
    $('.profile_bottom h2').click(function() {
      $(this).toggleClass('rotate')
      $(this).siblings('ul').slideToggle(200)
    })
  }

  if ($('.navigation').length !== 0) {
    $('.navigation li').click(function() {
      $(this).addClass('active')
      $(this).siblings().removeClass('active')
    })
  }

  if ($('.edit_photo').length !== 0) {
    var preview = $('.edit_photo input')

    preview.change(function() {
      const [file] = this.files
      if (file) {
        $('.edit_photo img').attr('src', URL.createObjectURL(file))
        $('.edit_photo img').parent().attr('href', URL.createObjectURL(file))
      }
    })

    $("input[type='tel']").inputmask({
      mask: '999 999-99-99',
    });

    $("input[type='email']").inputmask('email');

    $('label img').click(function() {

      $(this).toggleClass('active')
      $(this).siblings('img').toggleClass('active')

      x = $(this).siblings('input')

      if (x.attr('type') === "password") {
        x.attr('type', "text");
      } else {
        x.attr('type', "password");
      }

    })
  }

  if ($('.chat_main').length !== 0) {

    $(".messenger .search").on("keyup", function() {

      var value = $(this).val().toLowerCase();
      $(".chats .chat_item .chat_title").filter(function() {
        $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });

    });

    // $(".modal8 .search").on("keyup", function() {

    //   $(this).addClass('typing')
    //   var value = $(this).val().toLowerCase();
    //   $(".chats .chat_item .chat_title").filter(function() {
    //       $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
    //   });
    // });

  }

  if ($('.navigation').length !== 0) {
    $.scrollIt({
      activeClass: 'active',
    });
  }

}

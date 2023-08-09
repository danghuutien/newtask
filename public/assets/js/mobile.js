$('.search form button').click(function(e){
    e.preventDefault()
})

$('.item_search').click(function(){
    console.log($(this));
    $('.search').css({'visibility':'visible','opacity':'1'})
    $('.search form').css({'top': '50%','visibility':'visible', 'opacity':'1'})
    $('.close').css({'transform': 'translateY(0)'})
    $(this).css({'transform': 'translateY(-10px)','opacity':'0','visibility':'hidden', 'transition': 'all 0.2s'})
})

$('.overlay').click(function(){
    $('.search').css({'visibility':'hidden', 'opacity':'1'})
    $('.close').css({'transform': 'translateY(20px)'})
    $('.search form').css({'top': '45%','visibility':'hidden', 'opacity':'0'})
    $('.item_search').css({'transform': 'translateY(0)','opacity':'1', 'visibility':'visible', 'transition': 'all 0.2s'})
})
$('.close').click(function(){
    $('.search').css({'visibility':'hidden', 'opacity':'1'})
    $('.close').css({'transform': 'translateY(20px)'})
    $('.search form').css({'top': '45%','visibility':'hidden', 'opacity':'0'})
    $('.item_search').css({'transform': 'translateY(0)','opacity':'1','visibility':'visible', 'transition': 'all 0.2s'})
})

$(window).scroll(function() {
    let scrolledPixels = $(this).scrollTop();
    const heightHeaderTop = $('.header-top').height();
    const heightHeaderBottom = $('.header-bottom').height();
    const heightHeader = heightHeaderTop + heightHeaderBottom
    if(scrolledPixels >= heightHeader *4){
        $('.header-bottom').css({
            'position': 'fixed',
            'top': '0',
            'transition': 'all .5s',
            'transform' : `translateY(0)`
        })
        $('.header-bottom__logo').css({'max-height': '70px', 'transition': 'height 0.5s'})
        
    }else{
        $('.header-bottom').css({
            'position': 'relative',
            'transform' : `translateY(-${scrolledPixels}px)`,
            'transition': 'all 0s',
        })
        $('.header-bottom__logo').css({'max-height': '80px', 'transition': 'height 0.5s'})
    }

});

// $('.section-slide').slick({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     fade: true,
//     cssEase: 'linear'
//   });
  $('.section-slide').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev slick-arrow">'+
    '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>'+
    '</button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow">'+
    '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>'+
    
    '</button>',
  });

  $('.section-project__right').slick({
    infinite: true,
    // slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev slick-arrow">'+
    '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>'+
    '</button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow">'+
    '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>'+
    
    '</button>',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });

  $('.section-new-share__content').slick({
    infinite: true,
    // slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev slick-arrow">'+
    '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>'+
    '</button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow">'+
    '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>'+
    
    '</button>',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });

  $('.section-question .item .question').click(function(){
    if(!($('.section-question .item .question.active').is($(this)))){
        $('.section-question .item .question.active').parent().find('.sub').slideUp();
        $('.section-question .item .question.active').removeClass('active')
    }
    

    if(!($(this).hasClass('active'))){
        $(this).addClass('active');
    }else{
        $(this).removeClass('active');
    }
    $(this).parent().find('.sub').slideToggle();
  })

  $('.header-bottom .icon-left').click(function(){
    $('.header-bottom__menu').css({
        'transform': 'translateX(0%)'
    })
    $('.header-overlay').css({
        'visibility': 'visible',
        'z-index': '1000'
    })

    $('.header-overlay .close').css({
        'transform': 'translateY(0)',
        'opacity':'1'
    })
  })

$('.header-overlay').click(function(){
    $('.header-bottom__menu').css({
        'transform': 'translateX(-100%)'
    })
    $('.header-overlay').css({
        'visibility': 'hidden'
    })
})

let showMenu = false
$('.menu>li>a>svg').click(function(){
    $('.menu>li> .sub').each(function(index,element){
        if(!($(element).is($(this).parent().parent().find('.sub')))){
            $(element).css({'display':'none'})
        }
    })
    if(($(this).parent().parent().find('.sub').css('visibility') == 'hidden')){
        $(this).parent().parent().find('.sub').css({
            'visibility': 'visible',
            'height': 'auto'
        })
        $(this).find('ul>li').css({'transform': 'translateX(0)','transition': 'transform .3s' })

    }else{
        $(this).parent().parent().find('.sub').css({
            'visibility': 'hidden',
            'height': '0'
        })
        $(this).find('ul>li').css({'transform': 'translateX(-5px)','transition': 'transform .3s' })
    }
})
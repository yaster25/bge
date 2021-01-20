$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
 
});

 $(document).on("click", ".menu-btn", function (e) {
        if ($('#nav-toggle').is(':checked')){
            $('#nav-toggle').prop('checked', false);
        } else {
            $('#nav-toggle').prop('checked', true);
        }
    });

$(window).scroll(function(){
        if($(this).scrollTop()>140){
            $('.wrap-go-up').removeClass('up');
        }
        else if ($(this).scrollTop()<140){
            $('.wrap-go-up').addClass('up');
        }
    });


$(document).ready(function(){
    
    
    $('.go-up').click(function() {
            $('html,body').animate({scrollTop: 0}, 1000);//скорость прокрутки
            return false;
        });
    

   
    
    $('.tabs-item').on('click', function(event) {
        $(this).parents('.tabs').find('.tabs-item').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').removeClass('active');
        $('#'+$(this).attr('data-tab')).addClass('active');
        return false;
    });
  
    
     
    $('.slider-product').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          fade: true,
          asNavFor: '.slider-product-nav'
    });
    $('.slider-product-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-product',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
        arrows: true,
            responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
              
          }
        }
      ]
    });
    
    
    $('.calc-form__minus').on('click', function(event) {
        var val = $(this).parents('.calc-form').find('.calc-form__input').val();
        var new_val=parseInt(val) - 1;
        if(new_val<1) new_val=1;
        $(this).parents('.calc-form').find('.calc-form__input').val(new_val);
        return false;
    });
    
    $('.calc-form__plus').on('click', function(event) {
        var val = $(this).parents('.calc-form').find('.calc-form__input').val();
        var new_val=parseInt(val) + 1;
        $(this).parents('.calc-form').find('.calc-form__input').val(new_val);
        return false;
    });
    
    $('.popup-tabs-nav__item').on('click', function(event) {
       $(this).parents('.popup-tabs').find('.popup-tabs-nav__item').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.popup-tabs').find('.popup-tabs-content').removeClass('active');
        $('#'+$(this).attr('data-tab')).addClass('active');
        return false;
    });
    
    $('[data-fancybox]').fancybox({
        touch: false,
        closeExisting: true,
        autoFocus: false,
        afterShow: function (instance, current) {
        }
    });
    
    $('.popup-close').on('click', function(event){
        $.fancybox.close();
        return false;
    });

    
    $('.js-button-product-cart').on('click', function(event) {
        
        var val = $('input[name=size]:checked').val();
        console.log(val);
        
        if(val>0){
            $.fancybox.close();
            $.fancybox.open({
                src  : '#popup-added',
                type : 'inline',
                touch: false,
                closeExisting: true,
                autoFocus: false,
                opts : {
                    afterShow : function( instance, current ) {
                        
                    }
                }
            });
            
            $('.product-size-list-wrap').removeClass('error');
            $('.product-size-error').hide();
            
            return false;
        }
        else{
            $('.product-size-list-wrap').addClass('error');
            $('.product-size-error').show();
            return false;
        }
        
        
        
    });
    
    $('.header-cart-link').on('click', function(event) {
        $('.header-cart-info').toggle();
        $('.all-wrap').toggleClass('all-wrap-cart');
        return false;
    });

    $('.header-cart-info__close').on('click', function(event) {
        $('.header-cart-info').hide();
        $('.all-wrap').removeClass('all-wrap-cart');
        return false;
    });

    
     $(document).bind("click touchstart",function(event) {
        if ($(event.target).closest(".header-cart-link, .header-cart-info").length) return;
        $('.header-cart-info').hide();
        $('.all-wrap').removeClass('all-wrap-cart');
         event.stopPropagation();
      });
    
    

});
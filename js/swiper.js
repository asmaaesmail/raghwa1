var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 150,
      loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

/***********************************************/

            /*wow*/
       
/***********************************************/
 wow = new WOW(
      {
          animateClass: 'animated',
          offset:       100,
          callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
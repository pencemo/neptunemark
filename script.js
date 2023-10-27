// type animation
    var typed = new Typed('.auto-type', {
      strings: ['Dreams', 'Business', 'Ideas','Brand','Vision' ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      smartBackspace: true,
    });
//--------------------------//  


// load animation
    window.addEventListener("load", () => {
      const loder = document.querySelector(".loder");

      loder.classList.add("loder--hide");

      loder.addEventListener("transitionend", () => {
        document.body.removeChild(load)
      });
    });

//--------------------------// 



// sroll fade animation cdn 
   
      AOS.init({
        duration: 600
      });
//--------------------------//     


     
//jaquary-----------

      $(document).ready(function () {

      // scroll animation
      $(window).on('scroll', function(){
          if ($(window).scrollTop()) {
          $(".nav-bar").addClass('scroll');
          }else{
          $(".nav-bar").removeClass('scroll');
          }
      });
      // ------------

      // toggle animation
      $("#toggle").click(function () {
            $("#bar").toggleClass("open");
            $("#line1").toggleClass("iconanim1");
            $("#line2").toggleClass("iconanim2");
            $("#line3").toggleClass("iconanim3");
            $(".icon-line").toggleClass("color");
            $(".menu").toggleClass("color1");
      });
      // ------------

});

//jaquary end------





var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay:{
    delay:2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
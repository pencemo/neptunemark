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
        duration: 1000
      });
//--------------------------//     


// toggle animation

      $(document).ready(function () {
        $("#icon").click(function () {
          $("ul").toggleClass("show");
        });
        $("#clos1").click(function () {
          $("ul").removeClass("show");
        });
      });

     
//--------------------------//


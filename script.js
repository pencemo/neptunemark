
    var typed = new Typed('.auto-type', {
      strings: ['Dreams', 'Business', 'Ideas','Brand','Vision' ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      smartBackspace: true,
    });


    window.addEventListener("load", () => {
      const loder = document.querySelector(".loder");

      loder.classList.add("loder--hide");

      loder.addEventListener("transitionend", () => {
        document.body.removeChild(load);
      });
    });
 
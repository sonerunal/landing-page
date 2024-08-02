const swiper = new Swiper('.swiper', {

  loop: true,
  spaceBetween : 50,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    430 : {
      slidesPerView : 2
    },
    1024 : {
      slidesPerView : 4
    }
  }

});

  window.addEventListener("scroll",function() {
    var eve = this.document.querySelector(".eve")
    eve.classList.toggle("gel", this.window.scrollY > 0);
    var kbut = this.document.querySelector(".kbut")
    kbut.classList.toggle("newbut", this.window.scrollY > 0);
    var camplogo = this.document.querySelector(".camplogo") 
    camplogo.classList.toggle("newcampl", this.window.scrollY > 0);
    var links = this.document.querySelector(".navi>ul") 
    links.classList.toggle("newli", this.window.scrollY > 0 );
})  


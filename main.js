$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  //   // hide .navbar first
  // $(".nav-home").hide();
  //
  // // fade in .navbar
  // $(function () {
  //   $(window).scroll(function () {
  //           // set distance user needs to scroll before we fadeIn navbar
  //     if ($(this).scrollTop() > 600) {
  //       $('.nav-home').fadeIn();
  //     } else {
  //       $('.nav-home').fadeOut();
  //     }
  //   });
  // });

});



function openNav() {
  document.getElementById("myNav").style.display = "initial";
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

var topbutton = document.getElementById("top");
window.onscroll = function(){scrollFunction()};

function scrollFunction() {
  var mq = window.matchMedia('@media only screen and (max-width: 600px)');
  if (mq.matches){
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
      fixedNav.style.display = "block";
    } else {
      fixedNav.style.display = "none";
    }
  } else {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
      topbutton.style.display = "block";
    } else {
      topbutton.style.display = "none";
    }
  }

}

function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

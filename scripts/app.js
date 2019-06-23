// navbar toggle IIFE

(function navbarToggle() {
    const navToggler = document.querySelector(".nav_toggler");
    const navMenu = document.querySelector(".navbar ul");
    const navbarLinks = document.querySelectorAll(".navbar a");
  
    navToggler.addEventListener("click", navTogglerClick);
  
    function navTogglerClick() {
      navToggler.classList.toggle("open-nav_toggler");
      navMenu.classList.toggle("open");
    }
  
    navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));
  
    function navbarLinkClick() {
      if (navMenu.classList.contains("open")) {
        navToggler.click();
      }
    }
  })();
  
// animate.css 

  const animateNavSvg = document.querySelector('.nav_svg');
  animateNavSvg.classList.add('animated', 'fadeInDown', 'slow');

  const animateBtn = document.querySelector('.herobtn');
  animateBtn.classList.add('animated', 'infinite', 'bounce', 'slower');

  const animatePara = document.querySelector('.about_para');
  animatePara.classList.add('wow', 'animated', 'fadeInRight', 'slow');

  const animateHero_2 = document.querySelector('.hero_2');
  animateHero_2.classList.add('wow', 'animated', 'fadeIn', 'slower');


// hero 2 Slider 

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 5 seconds
}
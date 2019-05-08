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
  
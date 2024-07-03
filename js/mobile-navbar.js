class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }

  function handleButtonClick(event){
    if(event.type === "touchstart") event.preventDefault();
    navList.toggle("active");
    // handleClickOutside(menubar,() => {
    //   navList.remove("active");
    // });
  }

  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

  document.addEventListener("click", closeMenu)


  // function handleClickOutside(targetElement, callback){
  //    const html = document.documentElement;

  //     if(!targetElement.contains(event.target)){
  //       targetElement.removeAttribute("data-target");
  //       html.addEventListener("click", handleHTMLClick);
  //       html.addEventListener("touchstart", handleHTMLClick);
  //       callback();
  //     }

  //    if(!targetElement.hasAttribute("data-target")){
  //     html.addEventListener("click", handleHTMLClick);
  //     html.addEventListener("touchstart", handleHTMLClick);

  //    }
  // }
//   window.onscroll = () => {
//     let header = document.querySelector('.mobile');

//     header.classList.toggle('sticky', window.scrollY > 100);
// }
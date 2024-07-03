class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
    this.closeMenuOnClickOutside = this.closeMenuOnClickOutside.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();

    if (this.navList.classList.contains(this.activeClass)) {
      document.addEventListener("click", this.closeMenuOnClickOutside);
    } else {
      document.removeEventListener("click", this.closeMenuOnClickOutside);
    }
  }

  closeMenuOnClickOutside(event) {
    const target = event.target;
    if (!this.navList.contains(target) && !this.mobileMenu.contains(target)) {
      this.navList.classList.remove(this.activeClass);
      this.mobileMenu.classList.remove(this.activeClass);
      this.animateLinks();
      document.removeEventListener("click", this.closeMenuOnClickOutside);
    }
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
    this.navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        this.navList.classList.remove(this.activeClass);
        this.mobileMenu.classList.remove(this.activeClass);
        this.animateLinks();
        document.removeEventListener("click", this.closeMenuOnClickOutside);
      });
    });
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();

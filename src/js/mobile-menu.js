(() => {
  const menuBtnRef = document.querySelector("[mobile-menu-button]")
  const mobileMenuRef = document.querySelector("[menu-toggle]")
  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false
    menuBtnRef.classList.toggle("is-open")
    menuBtnRef.setAttribute("aria-expanded", !expanded)
    mobileMenuRef.classList.toggle("is-open")
  })
})();

(() => {
  const menuItmRef = document.querySelectorAll('[menu-toggle-item]');
  const mobileMenuRef = document.querySelector('[menu-toggle]');
  const menuBtnRef = document.querySelector('[mobile-menu-button]');

  function closeMenu() {
    mobileMenuRef.classList.remove('is-open');
    menuBtnRef.classList.toggle('is-open');
  }
  Array.from(menuItmRef).forEach(item => item.addEventListener('click', closeMenu));
})();

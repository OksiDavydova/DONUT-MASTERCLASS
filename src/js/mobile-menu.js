// (() => {
//   const mobileMenu = document.querySelector('.js-menu-container');
//   const openMenuBtn = document.querySelector('.js-open-menu');
//   const closeMenuBtn = document.querySelector('.js-close-menu');

//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     document.body.classList.toggle("modal-open");
//     mobileMenu.classList.toggle('is-open');
//   };

//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);

//   // Закрываем мобильное меню на более широких экранах
//   // в случае изменения ориентации устройства.
//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//   });
// })();
//

; (() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const menuBtnRef = document.querySelector("[menu-button]")
  const mobileMenuRef = document.querySelector("[data-menu-toggle]")
  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false
    menuBtnRef.classList.toggle("is-open")
    menuBtnRef.setAttribute("aria-expanded", !expanded)
    mobileMenuRef.classList.toggle("is-open")
    // document.body.classList.toggle("modal-open")
  })
})();

(() => {
  const menuItmRef = document.querySelectorAll('[data-menu-item]');
  const mobileMenuRef = document.querySelector('[data-menu-toggle]');
  const menuBtnRef = document.querySelector('[menu-button]');

  function closeMenu() {
    mobileMenuRef.classList.remove('is-open');
    menuBtnRef.classList.toggle('is-open');
  }
  Array.from(menuItmRef).forEach(item => item.addEventListener('click', closeMenu));
})();
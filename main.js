'use strict'

{
  const mobileMenu = document.querySelector('.mobile-menu');  
  const cover = document.getElementById('cover');
  console.log(cover); 
  const menuOpen = () => {
    mobileMenu.classList.add('open');
    cover.classList.add('open');
  };

  const menuClose = () => {
    mobileMenu.classList.remove('open');
    cover.classList.remove('open');
  };

  const menuButton = document.getElementById('menu-button');
  menuButton.addEventListener('click', () => {
    menuOpen();
  });

  const closeButton = document.getElementById('close-button');
  closeButton.addEventListener('click', () => {
    menuClose();
  });

  cover.addEventListener('click', () => {
    menuClose();
  });
}
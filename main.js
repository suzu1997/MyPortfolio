
'use strict';

{
  // ページ内リンクの自動スクロールに関するJavaScript
  window.addEventListener('DOMContentLoaded', () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const anchorLinksArr = Array.prototype.slice.call(anchorLinks);

    anchorLinksArr.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.hash;
        const targetElement = document.querySelector(targetId);
        const targetOffsetTop =
          window.pageYOffset + targetElement.getBoundingClientRect().top;
        window.scrollTo({
          top: targetOffsetTop,
          behavior: 'smooth',
        });
      });
    });
  });

  //ハンバーガーメニューの開閉に関するJavaScript
  const mobileMenu = document.querySelector('.mobile-menu');
  const cover = document.getElementById('cover');

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

  const menuItem = document.querySelectorAll('.menu');
  menuItem.forEach((e) => {
    e.addEventListener('click', () => {
      closeButton.click();
    });
  });
}

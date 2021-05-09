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

  //コンタクトフォーム
  const form = document.getElementById('form');
  const email = form['entry.1045781291'];
  const sendButton = document.getElementById('send-button');
  const emailError = document.getElementById('email-error');

  // emailの形式が違う場合にエラー文を表示
  const emailUpdate = (e) => {
    const validity = e.target.validity;

    if (validity.patternMismatch) {
      emailError.style.display = 'block';
      return;
    }
    emailError.style.display = 'none';
  };
  // submitボタンの活性/非活性
  const update = () => {
    const isValid = form.checkValidity();
    if (isValid) {
      // 通っていれば活性化
      sendButton.removeAttribute('disabled');
      return;
    }
    // 通っていなければ非活性にする
    sendButton.setAttribute('disabled', 'disabled');
  };

  email.addEventListener('input', emailUpdate);
  form.addEventListener('input', update);

  //フォームの送信ボタンをクリックした時の挙動
  const submitForm = () => {
    document.myForm.submit();
    document.getElementById('thxMessage').style.display = 'block';
    document.myForm.reset();
  };
  sendButton.addEventListener('click', () => {
    submitForm();
  });
}

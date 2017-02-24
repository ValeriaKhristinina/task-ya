var login = document.querySelector('.main-header__login');
var loginWrapper = document.querySelector('.login');
var modalOverlay = document.querySelector('.modal-overlay');
var btnClose = document.querySelector('.login__close');

var scrollHidden = document.querySelector('body');

login.addEventListener('click', function(event) {
  event.preventDefault();
  loginWrapper.classList.add('login--show');
  modalOverlay.classList.add('modal-overlay--show');
  scrollHidden.classList.add('overflow--hidden');
});

btnClose.addEventListener('click', function(event) {
  event.preventDefault();
  loginWrapper.classList.remove('login--show');
  modalOverlay.classList.remove('modal-overlay--show');
  scrollHidden.classList.remove('overflow--hidden');
});

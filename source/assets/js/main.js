var login = document.querySelector('.main-header__login');
var loginWrapper = document.querySelector('.login');
var modalOverlay = document.querySelector('.modal-overlay');
var btnLoginClose = document.querySelector('.login__close');

var scrollHidden = document.querySelector('body');

var exampleBtnShowContent = document.querySelector('.content .example__btn-show');
var exampleBtnHiddenContent = document.querySelector('.content .example__btn-hidden');
var exampleWrapperContent = document.querySelector('.content .example__wrapper');

var exampleBtnShowSidebar = document.querySelector('.sidebar .example__btn-show');
var exampleBtnHiddenSidebar = document.querySelector('.sidebar .example__btn-hidden');
var exampleWrapperSidebar = document.querySelector('.sidebar .example__wrapper');

login.addEventListener('click', function(event) {
  event.preventDefault();
  loginWrapper.classList.add('login--show');
  modalOverlay.classList.add('modal-overlay--show');
  scrollHidden.classList.add('overflow--hidden');
});

btnLoginClose.addEventListener('click', function(event) {
  event.preventDefault();
  loginWrapper.classList.remove('login--show');
  modalOverlay.classList.remove('modal-overlay--show');
  scrollHidden.classList.remove('overflow--hidden');
});

exampleBtnShowContent.addEventListener('click', function(event) {
    event.preventDefault();
    exampleWrapperContent.classList.add('example__wrapper--show');
  });

exampleBtnHiddenContent.addEventListener('click', function(event) {
    event.preventDefault();
    exampleWrapperContent.classList.remove('example__wrapper--show');
});

exampleBtnShowSidebar.addEventListener('click', function(event) {
    event.preventDefault();
    exampleWrapperSidebar.classList.add('example__wrapper--show');
  }

);

exampleBtnHiddenSidebar.addEventListener('click', function(event) {
    event.preventDefault();
    exampleWrapperSidebar.classList.remove('example__wrapper--show');
  }

);

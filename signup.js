let form = document.querySelector('form');
let nameInput = document.querySelector('.name');
let idInput = document.querySelector('.staff');
let emailInput = document.querySelector('.email');
let passwordInput = document.querySelector('.password');
let submitBtn = document.querySelector('.btn');


form.addEventListener('submit', function(e) {
    e.preventDefault();
  })

submitBtn.addEventListener('click', function() {
    // store the entered name in web storage
    localStorage.setItem('name', nameInput.value);
    localStorage.setItem('id', idInput.value);
    localStorage.setItem('email', emailInput.value);
    localStorage.setItem('password', passwordInput.value);
  
    goToLogIn();
  });

  let goToLogIn  = () => {
    location.href = "index.html"
  } 
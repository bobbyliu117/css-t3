$('.navbtn').on('click', function(e){
  e.preventDefault();
  const hash = this.hash;
  if(validate(hash)) {
    $('html').animate({
      scrollTop: $(hash).offset().top
    },600);
  }
});

function showError(input, message) {
  const p = input.parentElement;
  p.className = 'form-group error';
  p.querySelector('small').innerText = message;
}

function showSuccess(input) {
  input.parentElement.className = 'form-group success';
}

function validate(hash) {
  if(hash === '#page2') {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

    const v1 = validateRequire(username);
    const v2 = validateEmail(email);
    const v3 = validateRequire(password);
    const v4 = validateConfirm(password, password2);

    return v1 && v2 && v3 && v4;
  } else {
    return true;
  }
}

function validateRequire(input) {
  if(input.value === '') {
    showError(input, `${input.id} is required`);
    return false;
  }
  showSuccess(input);
  return true;
}

function validateEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  }
  showError(input, 'Email is not valid');
  return false;
}

function validateConfirm(input1, input2) {
  if(input1.value === input2.value) {
    showSuccess(input2);
    return true;
  }
  showError(input2, 'Password not matched');
  return false;
}
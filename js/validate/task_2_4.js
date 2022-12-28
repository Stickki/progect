let fName = document.querySelector('#first');
let lName = document.querySelector('#last');
let password = document.querySelector('#pass');
let email = document.querySelector('.emails');
let passAgain = document.querySelector('#pass-again');
let age = document.querySelector('#age');
let form = document.querySelector('form');
let year = document.querySelector('#year');
let label1 = document.querySelector('.q');
let label2 = document.querySelector('.w');
let label3 = document.querySelector('.e');
let label4 = document.querySelector('.r');
let label5 = document.querySelector('.t');
let label6 = document.querySelector('.y');
let label7 = document.querySelector('.u');
let pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
let patternDate = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{2}$/;

class Validate{
  FirstName(input){
    if (!input.value) {
      input.classList.add('error');
      label1.style.color = 'red';

    } else{
      input.classList.remove('error');
      label1.style.color = '#03b303';
    }
  }
  LastName(input){
    if (!input.value) {
      label2.style.color = 'red';
      input.classList.add('error');
      
    } else{
      input.classList.remove('error');
      label2.style.color = '#03b303';
    }
  }
  Email(input){
    if (!input.value) {
      label3.style.color = 'red';
      input.classList.add('error');
    } else {
      input.classList.remove('error');
      label3.style.color = '#03b303';
    }
    if(input.value.match(pattern))
    {
      label3.style.color = '#03b303';
        input.classList.remove('error');
        return true;
    } else{
        input.classList.add('error');
        
        label3.style.color = 'red';
      return false;
      }
  }

  Password(input){
    if (!input.value) {
      input.classList.add('error');
      label4.style.color = 'red';

    } else{
      input.classList.remove('error');
    }
  }
  PasswordAgain(input){
    if (!input.value) {
      input.classList.add('error');
      label5.style.color = 'red';
    } else{
      input.classList.remove('error');
    }

  }
  PasswordCheck(password, passAgain){
    if(password.value.length === passAgain.value.length && password.value !== '' && passAgain.value !== ''){
      password.classList.remove('error');
      passAgain.classList.remove('error');
      label5.style.color = '#03b303';
      label4.style.color = '#03b303';
    } else {
      passAgain.classList.add('error');
      password.classList.add('error');
      label5.style.color = 'red';
      label4.style.color = 'red';
    }
    if (password.value.length < 8 || passAgain.value.length < 8 || password.value.length !== passAgain.value.length) {
      passAgain.classList.add('error');
      password.classList.add('error');
      label5.style.color = 'red';
      label4.style.color = 'red';
    } else {
      password.classList.remove('error');
      passAgain.classList.remove('error');
      label5.style.color = '#03b303';
      label4.style.color = '#03b303';
    }
  }
    AgeForm(input){
      if (!input.value || input.value < 18) {
        input.classList.add('error');
        label6.style.color = 'red';
      } else{
        input.classList.remove('error');
        label6.style.color = '#03b303';
      }
    }
    Year(input){
      if (input.value.trim() == '') {
        input.classList.add('error');
      } else if (!input.value.match(patternDate)){
        input.classList.add('error');
      } else{
        input.classList.remove('error');
        return false;
      }

}
}
form.addEventListener('submit', () => {
  new Validate().FirstName(fName);
  new Validate().LastName(lName);
  new Validate().Email(email);
  new Validate().Password(password);
  new Validate().PasswordAgain(passAgain);
  new Validate().PasswordCheck(password, passAgain);
  new Validate().AgeForm(age);
  new Validate().Year(year);

});


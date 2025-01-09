// script1.js
document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector(".wrapper");
    const registerLink = document.querySelector(".register-link");
    const loginLink = document.querySelector(".login-link");
    const loginForm = document.getElementById('login-form');
    const registerForm = document.querySelector('.register form');
  
   
    const registeredUser   = localStorage.getItem('registeredUser  ');
  
    if (registeredUser   === 'true') {
     
      loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('You have already registered an account. Please log in instead.');
      });
    }
  
    n
    registerForm.addEventListener('submit', function(e) {
     
      localStorage.setItem('registeredUser  ', 'true');
    });
  
    registerLink.addEventListener("click", () => {
      wrapper.classList.add("active");
    });
  
    loginLink.addEventListener("click", () => {
      wrapper.classList.remove("active");
    });
  
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      window.location.href = 'index.html';
    });
  });

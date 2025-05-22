let index = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  index++;
  if (index > slides.length) index = 1;
  slides[index - 1].style.display = "block";
  setTimeout(showSlides, 2000); 
}


function changepage(){
 window.location.href = "contact.html";
}

function changepage2(){
 window.location.href = "services.html";
}

function changepage3(){
 window.location.href = "contact.html";
}

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle sidebar open/close
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Handle submenu toggle on click for mobile
const dropdownParents = document.querySelectorAll('.dropdown-parent > a, .dropdown-sub-parent > span');

dropdownParents.forEach(parent => {
  parent.addEventListener('click', e => {
    // Prevent default only on small screens
    if(window.innerWidth <= 768) {
      e.preventDefault();
      const li = parent.parentElement;
      li.classList.toggle('active');
    }
  });
});

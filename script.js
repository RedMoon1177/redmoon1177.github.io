function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// for transition effects - START
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry);
      if(entry.isIntersecting) {
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
  });
});

const hiddenFIElements = document.querySelectorAll('.hidden-fade-in');
hiddenFIElements.forEach((el) => observer.observe(el));

const hiddenTXElements = document.querySelectorAll('.hidden-translateX');
hiddenTXElements.forEach((el) => observer.observe(el));

// for transition effect - END
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileLinks = document.querySelectorAll(".mobile-menu-links a");

menuIcon.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});

let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 80) {

    navbar.classList.add("hide");
  }
   else {
    navbar.classList.remove("hide");
  }

  lastScrollY = currentScrollY;
});

// Rotating words effect
const roles = [
    "Developer ",
    "Coder ",
    "Problem Solver ",
    "Tech Explorer ",
    "Lifelong Learner "
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;
const roleText = document.getElementById("role-text");

// Photo rotate
function rotateRoles() {
    const current = roles[roleIndex];

    if (!deleting && charIndex <= current.length) {
        roleText.textContent = current.slice(0, charIndex++);
    } else if (deleting && charIndex >= 0) {
        roleText.textContent = current.slice(0, charIndex--);
    }

    if (charIndex === current.length) {
        deleting = true;
        setTimeout(rotateRoles, 1200);
        return;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(rotateRoles, deleting ? 80 : 120);
}

rotateRoles();

let currentPhoto = 0;
const photos = document.querySelectorAll(".photo-circle img");

function nextPhoto() {
    photos[currentPhoto].classList.remove("active");
    currentPhoto = (currentPhoto + 1) % photos.length;
    photos[currentPhoto].classList.add("active");
}
setInterval(nextPhoto, 3000);

//Mobile Navbar
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menuIcon");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");
  const header = document.getElementById("header");

  let lastScroll = 0;

  // Navbar hide/show on scroll
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
      header.classList.add("hide"); 
    } else {
      header.classList.remove("hide"); 
    }

    lastScroll = currentScroll;
  });

  // Mobile menu open
  menuIcon.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });

  // Mobile menu close
  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });

  document.querySelectorAll(".mobile-menu-links a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
});

//About page 
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});



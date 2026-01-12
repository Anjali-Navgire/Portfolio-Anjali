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



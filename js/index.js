/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navBar = document.getElementById("navBar");


/* Open / Close Menu */

menuBtn.addEventListener("click", function (event) {

    event.stopPropagation();

    navBar.classList.toggle("show");

    const isOpen = navBar.classList.contains("show");

    menuBtn.setAttribute("aria-expanded", isOpen);

    /* Change menu icon */

    if (isOpen) {

        menuBtn.innerHTML =
            '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars-staggered"></i>';

    }

});


/* Close menu when clicking a link */

const navLinks = document.querySelectorAll(".nav_bar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navBar.classList.remove("show");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars-staggered"></i>';

    });

});


/* Close menu when clicking outside */

document.addEventListener("click", function (event) {

    const clickedInsideMenu =
        navBar.contains(event.target);

    const clickedMenuButton =
        menuBtn.contains(event.target);


    if (
        !clickedInsideMenu &&
        !clickedMenuButton &&
        navBar.classList.contains("show")
    ) {

        navBar.classList.remove("show");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars-staggered"></i>';

    }

});


/* Close menu with ESC key */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        navBar.classList.remove("show");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars-staggered"></i>';

    }

});


/* =========================================================
   TYPING ANIMATION
   ========================================================= */

var typed = new Typed("#element", {

    strings: [
        "<i>Lumbini ICT</i> Campus",
        "Third Semester"
    ],

    typeSpeed: 100,

    backSpeed: 50,

    backDelay: 1200,

    loop: true

});


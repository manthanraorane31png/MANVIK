/* =========================================================
   MANVIK HOME PAGE JAVASCRIPT
========================================================= */


/* =========================================================
   HERO IMAGE SLIDER
========================================================= */

let currentHeroSlide = 0;

const heroSlides = document.querySelectorAll(".hero-slide");
const heroDots = document.querySelectorAll(".slider-dot");


function showHeroSlide(index) {

    if (heroSlides.length === 0) {
        return;
    }

    // Keep slide number within range
    if (index >= heroSlides.length) {
        currentHeroSlide = 0;
    }

    else if (index < 0) {
        currentHeroSlide = heroSlides.length - 1;
    }

    else {
        currentHeroSlide = index;
    }


    // Remove active class from all slides
    heroSlides.forEach(function(slide) {
        slide.classList.remove("active");
    });


    // Remove active class from all dots
    heroDots.forEach(function(dot) {
        dot.classList.remove("active");
    });


    // Activate current slide
    heroSlides[currentHeroSlide].classList.add("active");


    // Activate current dot
    if (heroDots[currentHeroSlide]) {
        heroDots[currentHeroSlide].classList.add("active");
    }
}


/* =========================================================
   NEXT / PREVIOUS BUTTON
========================================================= */

function changeHeroSlide(direction) {

    currentHeroSlide = currentHeroSlide + direction;

    showHeroSlide(currentHeroSlide);
}


/* =========================================================
   GO TO SPECIFIC SLIDE
========================================================= */

function goToHeroSlide(index) {

    currentHeroSlide = index;

    showHeroSlide(currentHeroSlide);
}


/* =========================================================
   AUTOMATIC SLIDER
   Changes every 1.5 seconds
========================================================= */

let heroSliderTimer = setInterval(function() {

    changeHeroSlide(1);

}, 1500);


/* =========================================================
   HOME SERVICE SEARCH
========================================================= */

function searchHomeService() {

    const searchInput =
        document.getElementById("homeServiceSearch");

    if (!searchInput) {
        return;
    }


    const service =
        searchInput.value.trim();


    // If search box is empty
    if (service === "") {

        alert("Please enter a home service.");

        searchInput.focus();

        return;
    }


    // Send user to services page
    window.location.href =
        "services.html?search=" +
        encodeURIComponent(service);
}


/* =========================================================
   PRESS ENTER TO SEARCH
========================================================= */

document.addEventListener("DOMContentLoaded", function() {

    const searchInput =
        document.getElementById("homeServiceSearch");


    if (searchInput) {

        searchInput.addEventListener("keypress", function(event) {

            if (event.key === "Enter") {

                searchHomeService();

            }

        });

    }


    // Start first slide
    showHeroSlide(0);

});


/* =========================================================
   PAUSE SLIDER WHEN MOUSE IS OVER IMAGE
========================================================= */

const heroContainer =
    document.querySelector(".hero-image-container");


if (heroContainer) {

    heroContainer.addEventListener("mouseenter", function() {

        clearInterval(heroSliderTimer);

    });


    heroContainer.addEventListener("mouseleave", function() {

        heroSliderTimer = setInterval(function() {

            changeHeroSlide(1);

        }, 1500);

    });

}
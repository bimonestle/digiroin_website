// ACTIVE LINKS IN NAV HEADER
window.onload = function () {
    var pricingLink = document.querySelector(".pricing-lk");
    pricingLink.classList.add("active");
    pricingLink.firstElementChild.style.opacity = 1;

}

// BOTTOM LINE FOR HEADER WHEN SCROLLED & SCROLLSPY
window.onscroll = function () {
    var body = document.body;
    var html = document.documentElement;
    var navHead = document.querySelectorAll("header.header");

    if (body.scrollTop >= navHead[0].clientHeight || html.scrollTop >= navHead[0].clientHeight) {
        // console.log("test");
        navHead[0].classList.add("scrolled");
    } else {
        navHead[0].classList.remove("scrolled");
    }
}

// ANIMATE THE BLUE DOT
    // HOME
    document.querySelector(".menu-container > a").onclick = function () {
        document.querySelector(".dot").style.opacity = 0;
        navLinks = document.querySelectorAll('.menu a');
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove("active");
        }
    }
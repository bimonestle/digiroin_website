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

    // // PRICING
    // document.querySelector(".our-pricing-lk").onclick = function () {
    //     document.querySelector(".our-pricing-lk").classList.add("active");
    //     document.querySelector(".dot").style.opacity = 1;
    //     document.querySelector(".dot").classList.add("pricing");
        
    //     // Deactivate previously clicked button
    //     document.querySelector(".pos-lk").classList.remove("active");
    //     document.querySelector(".dot").classList.remove("pos");
    // }

    // // POS
    // document.querySelector(".pos-lk").onclick = function () {
    //     document.querySelector(".pos-lk").classList.add("active");
    //     document.querySelector(".dot").style.opacity = 1;
    //     document.querySelector(".dot").classList.add("pos");
        
    //     // Deactivate previously clicked button
    //     document.querySelector(".our-pricing-lk").classList.remove("active");
    //     document.querySelector(".dot").classList.remove("pricing");
    // }

    
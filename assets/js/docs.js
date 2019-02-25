// SCROLLSPY VARIABLE
var section = document.querySelectorAll(".scrollspy");
var sections = {};
var i = 0;

Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
});

// BOTTOM LINE FOR HEADER WHEN SCROLLED & SCROLLSPY

    // BOTTOM LINE HEADER
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


    // SCROLLSPY
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    for (i in sections) {
        if (sections[i] <= scrollPosition) {
        document.querySelector('.active').setAttribute('class', ' ');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
        }
    }
}
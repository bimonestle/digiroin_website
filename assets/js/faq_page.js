// ACTIVE LINKS IN NAV HEADER
window.onload = function () {
    document.querySelector("p.faq a").classList.add("active");
}
// ACCORDION
var accordionHead = document.getElementsByClassName('accordion-head');
var accordionContents = document.getElementsByClassName('accordion-content') ;
var arrows = document.querySelectorAll('.accordion-head .icon-arrow');
var i;
for (let i = 0; i < accordionHead.length; i++) {
    accordionHead[i].addEventListener("click", function () {
        var accordionContent = this.nextElementSibling;
        var arrow = this.lastElementChild;
        if (accordionContent.style.maxHeight) {
            accordionContent.style.maxHeight = null;
            accordionContent.style.paddingBottom = null;
            arrow.style.transform = "rotate(90deg)";
        } else {
            // This loop[j] is used to revert the style in previous opened accordion
            for (let j = 0; j < accordionContents.length; j++) {
                accordionContents[j].style.maxHeight = null;
                accordionContents[j].style.paddingBottom = null;
                arrows[j].style.transform = "rotate(90deg)";
            }
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            accordionContent.style.paddingBottom = 1 + "em";
            arrow.style.transform = "rotate(-90deg)";
        }
    })
}